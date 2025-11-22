"use server";

import { Http } from "@/shared/api/http";
import { UserJoinInfo } from "../model/step";
import { ENDPOINT } from "@/shared/config/endpoint";

export type UserJoinResponse = {
  success: boolean;
};

export const submitJoin = async (data: UserJoinInfo) => {
  try {
    const response = await Http.post<UserJoinInfo, UserJoinResponse>({
      request: ENDPOINT.AUTH.JOIN,
      data,
    });
    return response;
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
};
