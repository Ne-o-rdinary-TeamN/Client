"use client";

import { Category } from "@/shared/model";
import type {
  BasePagedResponse,
  BaseResponse,
} from "@/shared/api/baseResponse";
import { Post } from "../model/post";
import { PUBLIC_API_URL, ENDPOINT } from "@/shared/config/endpoint";

export const fetchPostListClient = async (
  category: Category,
  page: number = 0
): Promise<BasePagedResponse<Post[]>> => {
  const params = new URLSearchParams({
    category,
    page: page.toString(),
  });

  const response = await fetch(
    `${PUBLIC_API_URL}${ENDPOINT.POST.READ_ALL}?${params}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: BaseResponse<BasePagedResponse<Post[]>> = await response.json();
  return data.result;
};
