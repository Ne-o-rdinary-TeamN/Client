import { PostListScrollView } from "@/entities/post";
import { fetchPostList } from "@/entities/post/api/fetchPostList";
import { Category } from "@/shared/model";
import PostCategory from "./PostCategory";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type PostsResponse = Awaited<ReturnType<typeof fetchPostList>>;

export default async function PostsPage({ category }: { category: Category }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam = 0 }) => fetchPostList(category, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage: PostsResponse) =>
      lastPage.last ? undefined : lastPage.number + 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostCategory selectedCategory={category} />
      <PostListScrollView category={category} />
    </HydrationBoundary>
  );
}
