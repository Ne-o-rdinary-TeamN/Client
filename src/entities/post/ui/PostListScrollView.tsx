import { Post } from "../model/post";
import PostItem from "./PostItem";

export default function PostListScrollView({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.title} {...post} />)
      ) : (
        <div className="flex items-center justify-center h-full mt-20">
          <p className="font-regular-14 text-gray-004">투표가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
