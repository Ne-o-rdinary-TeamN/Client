import { PostListScrollView } from "@/entities/post";
import { fetchPostList } from "@/entities/post/api/fetchPostList";
import { Category } from "@/shared/model";
import PostCategory from "./PostCategory";

export default async function PostsPage({ category }: { category: Category }) {
  const posts = await fetchPostList(category);

  return (
    <>
      <PostCategory selectedCategory={category} />
      <PostListScrollView posts={posts} />
    </>
  );
}
