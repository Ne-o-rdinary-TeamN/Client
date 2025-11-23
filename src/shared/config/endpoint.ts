export const PUBLIC_API_URL = "http://15.164.233.220:8080";

export const ENDPOINT = {
  AUTH: {
    LOGIN: "/api/user/login",
    JOIN: "/api/user/signup",
    USER_INFO: "/api/user/check",
  },
  NEWS: {
    TOP_NEWS: "/api/news/hot",
  },
  POST: {
    CREATE: "/api/posts/create",
    READ_ALL: "/api/posts/list",
    READ_JOINED: (userPk: number) => `/api/posts/${userPk}/join`,
    READ_CREATED: "/api/posts/my",
  },
  BOARD: {
    POST_DETAIL: (postPk: number) => `/api/posts/${postPk}`,
    COMMENT_DETAIL: (postPk: number, option: "AGREE" | "DISAGREE") => `/api/comment?postPk=${postPk}&option=${option}`,
    VOTE_EVENT: "/api/posts/vote",
  },
};
