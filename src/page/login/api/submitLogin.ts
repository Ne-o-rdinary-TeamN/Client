"use server";

import { LoginRequest, LoginResponse } from "@/features/auth/types/login";
import { BaseResponse } from "@/shared/api/baseResponse";
import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { AuthService } from "@/shared/lib/auth";

export const submitLogin = async (data: LoginRequest) => {
  try {
    const response = await Http.post<LoginRequest, BaseResponse<LoginResponse>>(
      {
        request: ENDPOINT.AUTH.LOGIN,
        data,
      }
    );

    if (response.result.accessToken) {
      await AuthService.setTokens(
        response.result.accessToken,
        response.result.accessToken
      );
      return { success: true };
    }

    return { success: false, error: "토큰을 받지 못했습니다." };
  } catch (error) {
    console.error("로그인 중 에러가 발생했어요: ", error);
    return { success: false, error: "로그인에 실패했어요." };
  }
};
