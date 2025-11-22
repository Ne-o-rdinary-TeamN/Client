import Footer from "@/widgets/layout/Footer/Footer";
import { PostListScrollView } from "@/entities/post";
import CategoryHeader from "./CategoryHeader";
import { mockPosts } from "@/entities/post/mock/post";

export default function CategoryPage() {
  return (
    <>
      <h1 className="font-bold-20 fixed w-max-width mx-auto z-999 top-0 left-0 right-0 bg-gray-002 px-side text-gray-007 h-header flex items-center">
        투표
      </h1>
      <div className="px-side relative">
        <CategoryHeader />
        <PostListScrollView posts={mockPosts} />
      </div>
      <Footer />
    </>
  );
}
