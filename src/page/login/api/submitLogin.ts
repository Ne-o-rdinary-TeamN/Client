"use server";

import { LoginRequest, LoginResponse } from "@/features/auth/types/login";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { AuthService } from "@/shared/lib/auth";

export const submitLogin = async (data: LoginRequest) => {
  try {
    const response = await Http.post<LoginRequest, LoginResponse>({
      request: ENDPOINT.AUTH.LOGIN,
      data,
    });

    if (response.accessToken) {
      await AuthService.setTokens(response.accessToken, response.accessToken);
      return { success: true };
    }

    return { success: false, error: "토큰을 받지 못했습니다." };
  } catch (error) {
    console.error("로그인 중 에러가 발생했어요: ", error);
    return { success: false, error: "로그인에 실패했어요." };
  }
};
