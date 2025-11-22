import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import type {
  BasePagedResponse,
  BaseResponse,
} from "@/shared/api/baseResponse";
import { Post } from "@/entities/post/model/post";
import { REVALIDATE_TAG } from "@/shared/config/revalidateTag";
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

export const fetchJoinedPost = async (userPk: number, page: number = 0) => {
  const response = await Http.get<BaseResponse<JoinPostResponse>>({
    request: ENDPOINT.POST.READ_JOINED(userPk),
    authorize: true,
    params: {
      page,
    },
    next: {
      revalidate: 60 * 2,
      tags: [REVALIDATE_TAG.POST_JOINED(userPk)],
    },
  });

  const posts = response.result.singlePostViewResultDTOList.map(convertToPost);

  const pagedResponse: BasePagedResponse<Post[]> = {
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

  return pagedResponse;
};
