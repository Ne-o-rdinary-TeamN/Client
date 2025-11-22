import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { Post } from "../model/post";
import { Category } from "@/shared/model";
import type {
  BasePagedResponse,
  BaseResponse,
} from "@/shared/api/baseResponse";
import { REVALIDATE_TAG } from "@/shared/config/revalidateTag";

export const fetchPostList = async (category: Category) => {
  const response = await Http.get<BaseResponse<BasePagedResponse<Post[]>>>({
    request: ENDPOINT.POST.READ_ALL,
    authorize: true,
    params: {
      category,
    },
    next: {
      revalidate: 60 * 2,
      tags: [REVALIDATE_TAG.POST(category)],
    },
  });
  console.log(response.result.content);
  return response.result.content;
};
