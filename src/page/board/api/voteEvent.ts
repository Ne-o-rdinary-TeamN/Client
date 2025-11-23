"use server";

import { Http } from "@/shared/api/http";
import { ENDPOINT, PUBLIC_API_URL } from "@/shared/config/endpoint";
import { BoardDetailResponse } from "../types/board";

export async function postVoteEvent(postPk: number, opinion: "AGREE" | "DISAGREE") {
    try {
        const req = {
            postPk,
            opinion,
        };

        console.log("투표 요청 데이터:", req);

        // 쿼리 파라미터로 URL에 추가
        const url = new URL(ENDPOINT.BOARD.VOTE_EVENT, PUBLIC_API_URL);
        url.searchParams.append("postPk", postPk.toString());
        url.searchParams.append("opinion", opinion);

        const response = await Http.post<never, BoardDetailResponse>({
            request: url.pathname + url.search,
            authorize: true,
        });

        console.log("투표 응답:", response);
        return response;
    } catch (error) {
        console.error("투표 중 오류가 발생했습니다:", error);
        return null;
    }
}