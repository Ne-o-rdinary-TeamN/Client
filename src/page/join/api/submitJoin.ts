"use server";

import { Http } from "@/shared/api/http";
import { UserJoinInfo } from "../model/step";
import { ENDPOINT } from "@/shared/config/endpoint";
import { BaseResponse } from "@/shared/api/baseResponse";

export type UserJoinResponse = {
  success: boolean;
};

export const submitJoin = async (data: UserJoinInfo) => {
  try {
    const response = await Http.post<
      UserJoinInfo,
      BaseResponse<UserJoinResponse>
    >({
      request: ENDPOINT.AUTH.JOIN,
      data,
    });
    return response.result;
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
};
