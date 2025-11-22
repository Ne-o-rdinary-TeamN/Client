import type { Category } from "../model";

export const REVALIDATE_TAG = {
  POST: (category: Category) => `posts-${category}`,
  POST_JOINED: (userPk: number) => `posts-joined-${userPk}`,
  POST_CREATED: (userPk: number) => `posts-created-${userPk}`,
};
