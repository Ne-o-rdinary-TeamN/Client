import Footer from "@/widgets/layout/Footer/Footer";
import Mydiscussion from "./Mydiscussion";
import { UserInfoResponse } from "../model/user";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { BaseResponse } from "@/shared/api/baseResponse";

export default async function MyPage() {
  const userInfo = await Http.get<BaseResponse<UserInfoResponse>>({
    request: ENDPOINT.AUTH.USER_INFO,
    authorize: true,
  });
  return (
    <div className="px-4 pt-6">
      <Mydiscussion userInfo={userInfo.result} />
      <Footer />
    </div>
  );
}
