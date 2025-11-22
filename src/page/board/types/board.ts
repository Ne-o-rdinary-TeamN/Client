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
        news: NewsResponse[];
    }
}

export type NewsResponse = {
    newsPk: number;
    title: string;
    url: string;
}

export type CommentDetailResponse = {
    commentPk: number;
    userId: string;
    content: string;
    likes: number;
}