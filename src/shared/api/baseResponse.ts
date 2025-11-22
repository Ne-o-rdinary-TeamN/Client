export type BaseResponse<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
  success: boolean;
};
