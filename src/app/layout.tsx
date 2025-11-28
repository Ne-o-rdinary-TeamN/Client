import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Agree - 정말 동의해?",
  description: "뉴스 속 논란을 쉽게 해결하는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ReactQueryProvider>
          <main className="max-w-max-width mx-auto min-h-screen">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
