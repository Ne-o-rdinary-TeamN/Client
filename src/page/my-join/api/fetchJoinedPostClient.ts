"use client";

import type {
  BasePagedResponse,
  BaseResponse,
} from "@/shared/api/baseResponse";
import { Post } from "@/entities/post/model/post";
import { PUBLIC_API_URL, ENDPOINT } from "@/shared/config/endpoint";
import type { JoinPostResponse, JoinPostDTO } from "../model/joinPost";

const convertToPost = (dto: JoinPostDTO): Post => {
  return {
    title: dto.postName,
    totalCount: dto.agreeCount + dto.disagreeCount,
    agree: "찬성",
    agreeRate: Math.round(dto.agreeRate * 100),
    disagree: "반대",
    disagreeRate: Math.round(dto.disagreeRate * 100),
    agreeCount: dto.agreeCount,
    disagreeCount: dto.disagreeCount,
    hashtags: dto.hashtags,
    participated: true,
    postPk: dto.postPk,
  };
};

export const fetchJoinedPostClient = async (
  userPk: number,
  page: number = 0
): Promise<BasePagedResponse<Post[]>> => {
  const params = new URLSearchParams({
    page: page.toString(),
  });

  const response = await fetch(
    `${PUBLIC_API_URL}${ENDPOINT.POST.READ_JOINED(userPk)}?${params}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch joined posts");
  }

  const data: BaseResponse<JoinPostResponse> = await response.json();
  const posts = data.result.singlePostViewResultDTOList.map(convertToPost);

  return {
    totalElements: posts.length,
    totalPages: 1,
    size: posts.length,
    content: posts,
    number: page,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: posts.length,
    pageable: {
      offset: 0,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      paged: true,
      pageNumber: page,
      pageSize: posts.length,
      unpaged: false,
    },
    first: true,
    last: true,
    empty: posts.length === 0,
  };
};
