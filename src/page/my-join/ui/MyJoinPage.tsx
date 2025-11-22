import { Header } from "@/shared/ui";
import { ChevronLeftIcon } from "lucide-react";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { BaseResponse } from "@/shared/api/baseResponse";
import { UserInfoResponse } from "@/page/my/model/user";
import { fetchJoinedPost } from "../api/fetchJoinedPost";
import MyJoinPostList from "./MyJoinPostList";

export default async function MyJoinPage() {
  const userInfo = await Http.get<BaseResponse<UserInfoResponse>>({
    request: ENDPOINT.AUTH.USER_INFO,
    authorize: true,
  });

  const initialData = await fetchJoinedPost(userInfo.result.userPk, 0);

  return (
    <div className="px-side">
      <Header
        title="내가 참여한 토론"
        icon={<ChevronLeftIcon className="text-blue-004" size={24} />}
      />
      <MyJoinPostList
        userPk={userInfo.result.userPk}
        initialData={initialData}
      />
    </div>
  );
}
