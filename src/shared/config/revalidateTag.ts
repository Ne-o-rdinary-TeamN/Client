import type { Category } from "../model";

export const REVALIDATE_TAG = {
  POST: (category: Category) => `posts-${category}`,
};
