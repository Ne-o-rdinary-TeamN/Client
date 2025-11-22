"use server";

import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { BoardDetailResponse } from "../types/board";

export async function getBoardDetail(postPk: number): Promise<BoardDetailResponse | null> {
    try {
        const response = await Http.get<BoardDetailResponse>({
            request: ENDPOINT.BOARD.POST_DETAIL(postPk),
            authorize: true,
            cache: "no-store",
        });
        return response;
    } catch (error) {
        console.error("뉴스를 불러오는 중 오류가 발생했습니다:", error);
        return null;
    }
}