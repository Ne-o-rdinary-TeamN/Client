import UserIcon from "@/shared/ui/icons/UserIcon";
import React from "react";
import { getBoardDetail } from "../api/boardDetail";
import VoteButtons from "./VoteButtons";

async function Vote({ postPk }: { postPk: number }) {
    const boardDetail = await getBoardDetail(postPk);
    if (!boardDetail) {
        return <div>게시글을 불러오는 중 오류가 발생했습니다.</div>;
    }
    const { title, hashtags, participated, agree, disagree, agreeCount, disagreeCount, agreeRate, disagreeRate, totalCount } = boardDetail.result;

    return (
        <div>
            <div className="w-full pb-4 mt-header bg-white">
                <div className="flex flex-col px-4">
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <UserIcon className={(participated ? "text-blue-002" : "text-gray-003")} />
                        <h2 className={`font-regular-12 ${participated ? "text-blue-004" : "text-gray-004"}`}>{participated ? "참여완료!" : `${totalCount}명 참여`}</h2>
                    </div>
                    <p className="font-bold-20 text-gray-007 text-center mt-3">
                        {title}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        {hashtags.map((hashtag: string) => (
                            <p className="font-regular-13 text-gray-004" key={hashtag}>#{hashtag}</p>
                        ))}
                    </div>
                    <VoteButtons
                        postPk={postPk}
                        agreeRate={agreeRate}
                        disagreeRate={disagreeRate}
                        agreeCount={agreeCount}
                        disagreeCount={disagreeCount}
                        agree={agree}
                        disagree={disagree}
                        participated={participated}
                    />
                </div>
            </div>
        </div>
    );
}

export default Vote;
