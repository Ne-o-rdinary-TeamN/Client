export const PUBLIC_API_URL = "http://15.164.233.220:8080";

export const ENDPOINT = {
  AUTH: {
    LOGIN: "/api/user/login",
    JOIN: "/api/user/signup",
    USER_INFO: "/api/user/check",
  },
  NEWS: {
    TOP_NEWS: "/api/search/news?display=5",
  },
  POST: {
    CREATE: "/api/posts/create",
    READ_ALL: "/api/posts/list",
  },
  BOARD: {
    POST_DETAIL: (postPk: number) => `/api/posts/${postPk}`,
    COMMENT_DETAIL: (postPk: number, option: "all" | "agree" | "disagree") => `/api/comments/${postPk}/${option}`,
  },
};
