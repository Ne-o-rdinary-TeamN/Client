import { EllipsisVertical, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { getCommentDetail } from "../api/commentDetail";
import { CommentDetailResponse, CommentItem } from "../types/board";

export default async function Discussion({ postPk }: { postPk: number }) {
  const agreeCommentDetail = await getCommentDetail(postPk, "AGREE");
  const disagreeCommentDetail = await getCommentDetail(postPk, "DISAGREE");
  if (!agreeCommentDetail || !disagreeCommentDetail) {
    return <div>댓글을 불러오는 중 오류가 발생했습니다.</div>;
  }
  return (
    <div className="mt-6 px-4 pb-[calc(var(--spacing-footer)+24px)]">
      <h1 className="font-semibold-16 text-gray-006 pl-2 mt-6">토론 게시판</h1>
      <div className="flex flex-col gap-2.5 text-gray-006 font-regular-12 mt-3">
        {agreeCommentDetail.result.list.map((item) => (
          <DiscussionItem key={item.commentPk} comment={item} />
        ))}
        {disagreeCommentDetail.result.list.map((item) => (
          <DiscussionItem key={item.commentPk} comment={item} />
        ))}
      </div>
    </div>
  );
}

function DiscussionItem({ comment }: { comment: CommentItem }) {
  const { content, likes, userId } = comment;
  return (
    <div className="w-full h-32 bg-white flex flex-col rounded-[14px] px-side py-[15px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)]">
      <div className="flex items-center w-full gap-2.5">
        <Image
          src="/images/approve.svg"
          alt="approval"
          width={28}
          height={25}
        />
        <span className="font-semibold-13 text-gray-005">{userId}</span>
        <div className="flex-1 flex items-center justify-end">
          <button className="group">
            <EllipsisVertical
              size={18}
              className="text-gray-004 flex-1 group-active:text-gray-003"
            />
          </button>
        </div>
      </div>
      <div className="line-clamp-2 font-regular-13 text-gray-005 mt-2.5">
        {content}
      </div>
      <div className="flex-1 flex flex-col justify-end items-end">
        <div className="flex items-center gap-2">
          <button className="font-regular-12 flex items-center gap-1 text-gray-004">
            <ThumbsUp size={14} className="text-red-003" />
            <span>{likes}</span>
          </button>
          <button className="font-regular-12 flex items-center gap-1 text-gray-004">
            <ThumbsDown size={14} className="text-blue-003" />
            <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
}
