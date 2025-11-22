import RightArrow from "@/shared/ui/icons/RightArrow";
import { getNews } from "../api/getNews";
import type { NewsItem } from "../types/news";
import Link from "next/link";

function HotNewsButton({ index, title, link }: { index: number; title: string; link: string }) {
    return (
        <Link href={link} className="grid grid-cols-10 items-center gap-2 bg-white rounded-xl justify-between py-2 px-4 h-[48px] box-border">
            <span className="text-gray-006 font-medium-14 col-span-0.5 text-start">
                {index}
            </span>
            <span className="col-span-8 text-gray-006 font-regular-14 line-clamp-1">
                {title}
            </span>
            <div className="col-span-1 flex items-center justify-end">
                <RightArrow className="text-gray-006" />
            </div>
        </Link>
    );
}

async function HotNews() {
    const newsData = await getNews();
    const newsItems: NewsItem[] =
        newsData?.result?.items ||
        [];

    return (
        <section className="mt-6 px-side pb-[140px]">
            <h1 className="font-semibold-18 text-gray-006 pl-2">실시간 핫뉴스</h1>
            <div className="flex flex-col gap-1.5 text-gray-006 font-regular-12 mt-3">
                {newsItems.length > 0 ? (
                    newsItems.map((news, index) => (
                        <HotNewsButton
                            key={index}
                            index={index + 1}
                            title={news?.title}
                            link={news?.originallink || "#"}
                        />
                    ))
                ) : (
                    <div className="text-center py-4 text-gray-004 font-regular-14">
                        뉴스를 불러올 수 없습니다.
                    </div>
                )}
            </div>
        </section>
    );
}

export default HotNews;
