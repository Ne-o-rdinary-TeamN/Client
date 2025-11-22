export type LoginRequest = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  userPk: number;
};
