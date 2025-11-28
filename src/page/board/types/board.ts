export type BoardDetailResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    postPk: number;
    title: string;
    participated: boolean;
    hashtags: string[];
    agree: boolean;
    disagree: boolean;
    agreeCount: number;
    disagreeCount: number;
    agreeRate: number;
    disagreeRate: number;
    totalCount: number;
    news: NewsResponse[];
  };
};

export type NewsResponse = {
  newsPk: number;
  title: string;
  url: string;
};

export type CommentDetailResponse = {
  result: {
    list: CommentItem[];
  };
};

export type CommentItem = {
  commentPk: number;
  userId: string;
  content: string;
  likes: number;
};
