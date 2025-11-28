"use server";

import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { CommentDetailResponse } from "../types/board";

export async function postCommentDetail(postPk: number, content: string) {
  try {
    const response = await Http.post<
      { content: string },
      CommentDetailResponse
    >({
      request: ENDPOINT.BOARD.POST_COMMENT(postPk),
      authorize: true,
      data: { content },
    });
    return response;
  } catch (error) {
    console.error("댓글을 불러오는 중 오류가 발생했습니다:", error);
    return null;
  }
}

export async function getCommentDetail(
  postPk: number,
  opinion: "AGREE" | "DISAGREE" | "ALL"
) {
  try {
    const response = await Http.get<CommentDetailResponse>({
      request: ENDPOINT.BOARD.COMMENT_DETAIL(postPk, opinion),
      authorize: true,
    });
    return response;
  } catch (error) {
    console.error("댓글을 불러오는 중 오류가 발생했습니다:", error);
    return null;
  }
}
