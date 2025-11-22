"use server";

import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import type { NewsResponse } from "../types/news";

export async function getNews(): Promise<NewsResponse | null> {
    try {
        const response = await Http.get<NewsResponse>({
            request: ENDPOINT.NEWS.TOP_NEWS,
            authorize: true,
            cache: "no-store",
        });
        return response;
    } catch (error) {
        console.error("뉴스를 불러오는 중 오류가 발생했습니다:", error);
        return null;
    }
}