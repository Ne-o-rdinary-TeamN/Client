"use client";

import { Post } from "../model/post";
import PostItem from "./PostItem";
import { Category } from "@/shared/model";
import { useEffect, useRef, useState } from "react";
import { fetchPostListClient } from "../api/fetchPostListClient";
import type { BasePagedResponse } from "@/shared/api/baseResponse";

interface PostListScrollViewProps {
  category: Category;
  initialData: BasePagedResponse<Post[]>;
}

export default function PostListScrollView({
  category,
  initialData,
}: PostListScrollViewProps) {
  const [posts, setPosts] = useState<Post[]>(initialData.content);
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState(initialData.last);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && !isLast) {
          setIsLoading(true);
          try {
            const nextPage = page + 1;
            const response = await fetchPostListClient(category, nextPage);
            setPosts((prev) => [...prev, ...response.content]);
            setPage(nextPage);
            setIsLast(response.last);
          } catch (error) {
            console.error("Failed to fetch posts:", error);
          } finally {
            setIsLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [category, page, isLoading, isLast]);

  return (
    <div className="mt-4 flex flex-col gap-4 pb-20">
      {posts.length > 0 ? (
        <>
          {posts.map((post, index) => (
            <PostItem key={`${post.postPk}-${index}`} {...post} />
          ))}
          {!isLast && (
            <div
              ref={observerRef}
              className="h-10 flex items-center justify-center"
            >
              {isLoading && (
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
