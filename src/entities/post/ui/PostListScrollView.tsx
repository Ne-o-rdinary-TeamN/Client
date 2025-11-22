import { Post } from "../model/post";
import PostItem from "./PostItem";

export default function PostListScrollView({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={post.title} {...post} />
      ))}
    </div>
  );
}
