"use client";

import { Post } from "@/entities/post/model/post";
import PostItem from "@/entities/post/ui/PostItem";
import { useEffect, useRef, useState } from "react";
import { fetchRegisterPostClient } from "../api/fetchRegisterPostClient";
import type { BasePagedResponse } from "@/shared/api/baseResponse";

interface MyRegisterPostListProps {
  initialData: BasePagedResponse<Post[]>;
}

export default function MyRegisterPostList({
  initialData,
}: MyRegisterPostListProps) {
  const [posts, setPosts] = useState<Post[]>(initialData?.content || []);
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState(initialData?.last || false);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && !isLast) {
          setIsLoading(true);
          try {
            const nextPage = page + 1;
            const response = await fetchRegisterPostClient(nextPage);
            setPosts((prev) => [...prev, ...response.content]);
            setPage(nextPage);
            setIsLast(response.last);
          } catch (error) {
            console.error("Failed to fetch created posts:", error);
          } finally {
            setIsLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (currentObserver) {
      observer.observe(currentObserver);
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [page, isLoading, isLast]);

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
          <p className="font-regular-14 text-gray-004">
            등록한 토론이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
