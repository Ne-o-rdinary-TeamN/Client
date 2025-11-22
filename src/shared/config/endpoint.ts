export const PUBLIC_API_URL = "";

export const ENDPOINT = {
  AUTH: {
    LOGIN: "",
    JOIN: "",
  },
  BOARD: {
    GET_POST: (id: string | number) => `/board/${id}`,
  },
};
