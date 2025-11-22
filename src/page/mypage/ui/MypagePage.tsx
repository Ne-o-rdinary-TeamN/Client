import Footer from "@/widgets/layout/Footer/Footer";
import Mydiscussion from "./Mydiscussion";
import { UserInfoResponse } from "../model/user";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";

async function MypagePage() {
  const userInfo = await Http.get<UserInfoResponse>({
    request: ENDPOINT.AUTH.USER_INFO,
    authorize: true,
  });
  return (
    <div className="px-4 pt-6">
      <Mydiscussion userInfo={userInfo} />
      <Footer />
    </div>
  );
}

export default MypagePage;
