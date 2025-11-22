import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { Post } from "../model/post";

export const fetchPostList = async () => {
  const response = await Http.get<Post[]>({
    request: ENDPOINT.POST.READ_ALL,
    authorize: true,
  });
  return response;
};
