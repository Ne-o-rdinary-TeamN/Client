import HotNews from "./HotNews";
import HotTopic from "./HotTopic";
import Footer from "@/widgets/layout/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/icons/Logo.svg";

function Homepage() {
  return (
    <>
      <main className="flex flex-col h-screen overflow-y-auto scrollbar-hide relative">
        <header className="fixed w-max-width mx-auto top-0 flex py-6 px-side bg-gray-002 h-header z-20">
          <Image src={Logo} alt="logo" width={114} height={30} />
        </header>
        <section aria-label="Hot topics">
          <HotTopic />
        </section>
        <section aria-label="Hot news">
          <HotNews />
        </section>
        <Link
          href="/write"
          className="fixed bottom-[83px] right-side active:brightness-90"
          aria-label="글쓰기 페이지로 이동"
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
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
