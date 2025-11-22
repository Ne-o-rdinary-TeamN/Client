import Vote from "./Vote";
import RelatedNews from "./RelatedNews";
import { ChevronLeftIcon } from "lucide-react";
import { Header } from "@/shared/ui";
import Discussion from "./Discussion";
import DiscussionFooter from "./DiscussionFooter";

function BoardPage({ postPk }: { postPk: number }) {
    return (
        <>
            <Header
                title="게시글"
                icon={<ChevronLeftIcon className="text-blue-004 ml-side" size={24} />}
                className="bg-white fixed top-0 left-0 right-0 z-10 h-header"
            />
            <Vote postPk={postPk} />
            <RelatedNews postPk={postPk} />
            <Discussion />
            <DiscussionFooter />
        </>
    );
}

export default BoardPage;
