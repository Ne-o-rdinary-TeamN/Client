export const PUBLIC_API_URL = "http://15.164.233.220:8080";

export const ENDPOINT = {
  AUTH: {
    LOGIN: "",
    JOIN: "",
  },
  NEWS: {
    TOP_NEWS: "/api/search/news?display=5",
  },
  BOARD: {
    GET_POST: (id: string | number) => `/board/${id}`,
  },
};
