"use server";

import { Http } from "@/shared/api/http";
import { ENDPOINT } from "@/shared/config/endpoint";
import { FormState } from "../model/form";
import { revalidatePath } from "next/cache";

interface WriteResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    postPk: number;
    title: string;
  };
  success: boolean;
}
export const submitWrite = async (data: FormState) => {
  try {
    const response = await Http.post<FormState, WriteResponse>({
      request: ENDPOINT.POST.CREATE,
      data,
      authorize: true,
    });
    revalidatePath(ENDPOINT.POST.READ_ALL);
    return response;
  } catch (error) {
    console.error("글 작성 실패:", error);
    alert("글 작성에 실패했습니다: " + (error as Error).message);
    return { success: false, error: (error as Error).message };
  }
};
