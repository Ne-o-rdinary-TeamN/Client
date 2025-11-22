export type JoinPostDTO = {
  postPk: number;
  postName: string;
  hashtags: string[];
  agreeCount: number;
  disagreeCount: number;
  agreeRate: number;
  disagreeRate: number;
};

export type JoinPostResponse = {
  singlePostViewResultDTOList: JoinPostDTO[];
};
