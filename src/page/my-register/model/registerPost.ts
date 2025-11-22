export type RegisterPostDTO = {
  postName: string;
  hashtags: string[];
  agreeCount: number;
  disagreeCount: number;
  agreeRate: number;
  disagreeRate: number;
  postPk: number;
};

export type RegisterPostResponse = {
  singlePostViewResultDTOList: RegisterPostDTO[];
};
