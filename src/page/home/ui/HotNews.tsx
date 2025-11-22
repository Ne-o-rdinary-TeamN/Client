"use client";

import RightArrow from "@/shared/ui/icons/RightArrow";

function HotNewsButton({ index, title }: { index: number; title: string }) {
  return (
    <div className="grid grid-cols-10 items-center gap-2 bg-white rounded-xl justify-between py-2 px-4 h-[48px] box-border">
      <span className="text-gray-006 font-medium-14 col-span-0.5 text-start">
        {index}
      </span>
      <span className="col-span-8 text-gray-006 font-regular-14 line-clamp-1">
        {title}
      </span>
      <div className="col-span-1 flex items-center justify-end">
        <RightArrow className="text-gray-006" />
      </div>
    </div>
  );
}

function HotNews() {
  return (
    <section className="mt-6 px-side pb-[140px]">
      <h1 className="font-semibold-18 text-gray-006 pl-2">실시간 핫뉴스</h1>
      <div className="flex flex-col gap-1.5 text-gray-006 font-regular-12 mt-3">
        <HotNewsButton
          index={1}
          title="뉴스 기사 제목입니다. 어쩌구 저쩌구..."
        />
        <HotNewsButton
          index={2}
          title="뉴스 기사 제목입니다. 어쩌구 저쩌구..."
        />
        <HotNewsButton
          index={3}
          title="뉴스 기사 제목입니다. 어쩌구 저쩌구..."
        />
        <HotNewsButton
          index={4}
          title="뉴스 기사 제목입니다. 어쩌구 저쩌구..."
        />
        <HotNewsButton
          index={5}
          title="뉴스 기사 제목입니다. 어쩌구 저쩌구..."
        />
      </div>
    </section>
  );
}

export default HotNews;
