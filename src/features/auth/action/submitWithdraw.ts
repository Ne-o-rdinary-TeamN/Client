"use server";

import { AuthService } from "@/shared/lib/auth";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";

export async function withdraw() {
  try {
    // TODO: API 엔드포인트가 준비되면 아래 주석을 해제하고 사용
    // await Http.del({
    //   request: ENDPOINT.AUTH.WITHDRAW,
    //   authorize: true,
    // });

    await AuthService.clearTokens();
    return { success: true };
  } catch (error) {
    console.error("Withdraw error:", error);
    return { success: false, error: "회원탈퇴에 실패했습니다." };
  }
}

