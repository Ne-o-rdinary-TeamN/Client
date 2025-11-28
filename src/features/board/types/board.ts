export interface BoardPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
  category?: string;
  viewCount?: number;
  commentCount?: number;
  tags?: string[];
}

export interface BoardPostResponse {
  data: BoardPost;
}
