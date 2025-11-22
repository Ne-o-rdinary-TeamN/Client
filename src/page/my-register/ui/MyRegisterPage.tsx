import { Header } from "@/shared/ui";
import { PostListScrollView } from "@/entities/post";
import { mockPosts } from "@/entities/post/mock/post";
import { ChevronLeftIcon } from "lucide-react";

export default function MyRegisterPage() {
  return (
    <div className="px-side">
      <Header
        title="내가 등록한 토론"
        icon={<ChevronLeftIcon className="text-blue-004" size={24} />}
      />
      <PostListScrollView posts={mockPosts} />
    </div>
  );
}
