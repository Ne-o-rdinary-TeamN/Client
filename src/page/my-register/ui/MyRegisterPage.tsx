import { Header } from "@/shared/ui";
import { ChevronLeftIcon } from "lucide-react";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { BaseResponse } from "@/shared/api/baseResponse";
import { UserInfoResponse } from "@/page/my/model/user";
import { fetchRegisterPost } from "../api/fetchRegisterPost";
import MyRegisterPostList from "./MyRegisterPostList";

export default async function MyRegisterPage() {
  const userInfo = await Http.get<BaseResponse<UserInfoResponse>>({
    request: ENDPOINT.AUTH.USER_INFO,
    authorize: true,
  });

  const initialData = await fetchRegisterPost(userInfo.result.userPk, 0);

  return (
    <div className="px-side">
      <Header
        title="내가 등록한 토론"
        icon={<ChevronLeftIcon className="text-blue-004" size={24} />}
      />
      <MyRegisterPostList initialData={initialData} />
    </div>
  );
}
