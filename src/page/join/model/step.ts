export const STEP = {
  NAME: "NAME",
  ID: "ID",
  PASSWORD: "PASSWORD",
  COMPLETE: "COMPLETE",
};

export type UserJoinInfo = {
  name: string;
  id: string;
  password: string;
};

export type NameStep = Partial<Pick<UserJoinInfo, "name">>;

export type IdStep = Partial<Pick<UserJoinInfo, "name" | "id">>;

export type PasswordStep = Partial<UserJoinInfo>;

export type CompleteStep = PasswordStep;
