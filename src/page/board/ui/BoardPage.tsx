import Vote from "./Vote";
import RelatedNews from "./RelatedNews";
import { ChevronLeftIcon } from "lucide-react";
import { Header } from "@/shared/ui";
import Discussion from "./Discussion";
import DiscussionFooter from "./DiscussionFooter";

function BoardPage({ postPk }: { postPk: number }) {
    return (
        <main>
            <Header
                title="게시글"
                icon={<ChevronLeftIcon className="text-blue-004 ml-side" size={24} />}
                className="bg-white fixed top-0 left-0 right-0 z-10 h-header"
            />
            <section aria-label="투표 결과">
                <Vote postPk={postPk} />
            </section>
            <section aria-label="관련 뉴스">
                <RelatedNews postPk={postPk} />
            </section>
            <section aria-label="토론 게시판">
                <Discussion postPk={postPk} />
            </section>
            <DiscussionFooter postPk={postPk} />
        </main>
    );
}

export default BoardPage;
