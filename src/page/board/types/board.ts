export type BoardDetailResponse = {
    pk: number;
    title: string;
    participated: boolean;
    hashtags: string[];
    agree: boolean;
    disagree: boolean;
    agreeCount: number;
    disagreeCount: number;
    agreeRate: number;
    disagreeRate: number;
    news: NewsResponse[];
}

export type NewsResponse = {
    pk: number;
    title: string;
    url: string;
}

export type CommentDetailResponse = {
    pk: number;
    userId: string;
    content: string;
    likes: number;
}