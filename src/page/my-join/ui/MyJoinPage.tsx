import { mockPosts } from "@/entities/post/mock/post";
import { PostListScrollView } from "@/entities/post";
import { Header } from "@/shared/ui";

import { ChevronLeftIcon } from "lucide-react";

export default function MyJoinPage() {
  return (
    <div className="px-side">
      <Header
        title="내가 참여한 토론"
        icon={<ChevronLeftIcon className="text-blue-004" size={24} />}
      />
      <PostListScrollView posts={mockPosts} />
    </div>
  );
}
