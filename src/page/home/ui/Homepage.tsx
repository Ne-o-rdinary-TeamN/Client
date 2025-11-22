import React from "react";
import HotNews from "./HotNews";
import HotTopic from "./HotTopic";
import Footer from "@/widgets/layout/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/icons/Logo.svg";

function Homepage() {
    return (
        <>
            <div className="flex flex-col h-screen overflow-y-auto scrollbar-hide relative">
                <div className="fixed top-0 flex py-6 left-0 px-side bg-gray-002 w-screen h-header z-20">
                    <Image src={Logo} alt="logo" width={114} height={30} />
                </div>
                <HotTopic />
                <HotNews />
                <Link
                    href="/write"
                    className="fixed bottom-[83px] right-side active:brightness-90"
                >
                    <div className="px-[18px] py-3 bg-blue-600 rounded-3xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] inline-flex justify-center items-center gap-2">
                        <Image
                            src="/icons/article.svg"
                            alt="article"
                            width={16}
                            height={16}
                        />
                        <div className="text-center justify-center text-white font-semibold-16 leading-5">
                            글쓰기
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Homepage;
