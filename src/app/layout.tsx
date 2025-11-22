import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

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
    <html lang="en">
      <body className="antialiased">
        <main className="max-w-max-width mx-auto min-h-screen bg-gray-002">{children}</main>
      </body>
    </html>
  );
}
