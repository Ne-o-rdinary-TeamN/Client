export type Post = {
  title: string;
  totalCount: number;
  agree: string;
  agreeRate: number;
  disagree: string;
  disagreeRate: number;
  agreeCount: number;
  disagreeCount: number;
  hashtags: string[];
  participated: boolean;
  postPk: number;
};
