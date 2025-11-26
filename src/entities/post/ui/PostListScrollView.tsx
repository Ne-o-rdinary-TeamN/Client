"use client";

import { Post } from "../model/post";
import PostItem from "./PostItem";
import { Category } from "@/shared/model";
import { useEffect, useMemo, useRef } from "react";
import { fetchPostListClient } from "../api/fetchPostListClient";
import { useInfiniteQuery } from "@tanstack/react-query";

interface PostListScrollViewProps {
  category: Category;
}

export default function PostListScrollView({
  category,
}: PostListScrollViewProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam = 0 }) => fetchPostListClient(category, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number + 1,
    staleTime: 1000 * 60,
  });

  const posts = useMemo(
    () => data?.pages.flatMap((page) => page.content) ?? [],
    [data]
  );

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) {
      return;
    }

    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentObserver);

    return () => {
      observer.unobserve(currentObserver);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "pending") {
    return (
      <div className="flex items-center justify-center h-full mt-20">
        <p className="font-regular-14 text-gray-004">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-4 pb-20">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <PostItem key={post.postPk} {...post} />
          ))}
          {hasNextPage && (
            <div
              ref={observerRef}
              className="h-10 flex items-center justify-center"
            >
              {isFetchingNextPage && (
                <p className="font-regular-14 text-gray-004">로딩 중...</p>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-full mt-20">
          <p className="font-regular-14 text-gray-004">투표가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
