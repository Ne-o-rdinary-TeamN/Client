"use client";
import RightArrow from "@/shared/ui/icons/RightArrow";
import Image from "next/image";
import React from "react";

const dummyHotTopics = [
  {
    id: 1,
    category: "시사",
    title: "핫토픽 내용 1핫토픽 내용 1핫토픽 내용 1핫토픽 내용 1핫토픽 내용 1",
    commentCount: 256,
  },
  {
    id: 2,
    category: "경제",
    title: "핫토픽 내용 2",
    commentCount: 189,
  },
  {
    id: 3,
    category: "기술",
    title: "핫토픽 내용 3",
    commentCount: 342,
  },
  {
    id: 4,
    category: "스포츠",
    title: "핫토픽 내용 4",
    commentCount: 521,
  },
  {
    id: 5,
    category: "연예",
    title: "핫토픽 내용 5",
    commentCount: 128,
  },
];

function HotTopic() {
  return (
    <div className="mt-header">
      <h1 className="font-semibold-18 text-gray-007 pl-side">핫토픽!</h1>
      <div className="mt-[10px] overflow-x-auto scrollbar-hide">
        <div
          className="flex gap-3 pl-side"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {dummyHotTopics.map((topic) => (
            <div
              key={topic.id}
              className="w-[200px] h-[260px] rounded-xl text-white font-regular-12 p-4 flex flex-col shrink-0 relative overflow-hidden"
              style={{
                scrollSnapAlign: "start",
                backgroundImage: `url(/images/topic${topic.id}.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 z-0" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex ml-auto items-center gap-1">
                  <p className="text-white flex">바로가기</p>
                  <RightArrow className="text-white" />
                </div>
                <div className="text-white mt-auto flex flex-col gap-2">
                  <p className="bg-blue-002 w-fit rounded-full px-2.5 py-0.5 text-blue-004">
                    {topic.category}
                  </p>
                  <p className="font-bold-20 text-white line-clamp-2">
                    {topic.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/comment.svg"
                      alt="comment"
                      width={16}
                      height={16}
                    />
                    <p className="text-blue-001">{topic.commentCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotTopic;
