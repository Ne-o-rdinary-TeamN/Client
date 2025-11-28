import UserIcon from "@/shared/ui/icons/UserIcon";
import { getBoardDetail } from "../api/boardDetail";
import VoteButtons from "./VoteButtons";
import VoteModal from "./VoteModal";

async function Vote({ postPk }: { postPk: number }) {
  const boardDetail = await getBoardDetail(postPk);
  if (!boardDetail) {
    return <div>게시글을 불러오는 중 오류가 발생했습니다.</div>;
  }
  const {
    title,
    hashtags,
    participated,
    agree,
    disagree,
    agreeCount,
    disagreeCount,
    agreeRate,
    disagreeRate,
    totalCount,
  } = boardDetail.result;

  return (
    <div>
      <div className="w-full pb-4 mt-header bg-white">
        <div className="flex flex-col px-4">
          <div className="flex items-center justify-center gap-2 mt-3">
            <UserIcon
              className={participated ? "text-blue-002" : "text-gray-003"}
            />
            <h2
              className={`font-regular-12 ${participated ? "text-blue-004" : "text-gray-004"}`}
            >
              {participated ? "참여완료!" : `${totalCount}명 참여`}
            </h2>
          </div>
          <p className="font-bold-20 text-gray-007 text-center mt-3">{title}</p>
          <div className="relative mt-1">
            <div
              className={`space-y-5 ${!participated ? "blur-sm pointer-events-none" : ""}`}
            >
              <div className="flex items-center justify-center gap-2">
                {hashtags.map((hashtag: string, index: number) => (
                  <p
                    className="font-regular-13 text-gray-004"
                    key={`${hashtag}-${index}`}
                  >
                    #{hashtag}
                  </p>
                ))}
              </div>
              <VoteButtons
                agreeRate={agreeRate}
                disagreeRate={disagreeRate}
                agreeCount={agreeCount}
                disagreeCount={disagreeCount}
                agree={agree}
                disagree={disagree}
                participated={participated}
              />
            </div>
            {!participated && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-2xl shadow-lg border border-gray-002">
                  <p className="text-gray-006 font-semibold-15">
                    투표하면 결과를 볼 수 있어요!
                  </p>
                  <VoteModal
                    postPk={postPk}
                    agreeRate={agreeRate}
                    disagreeRate={disagreeRate}
                    agreeCount={agreeCount}
                    disagreeCount={disagreeCount}
                    agree={agree}
                    disagree={disagree}
                    participated={participated}
                    totalCount={totalCount}
                    title={title}
                    hashtags={hashtags}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
