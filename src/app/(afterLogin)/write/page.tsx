"use client";

import dynamic from "next/dynamic";

const WritePage = dynamic(
  () => import("@/page/write").then((mod) => ({ default: mod.WritePage })),
  {
    ssr: false,
  }
);

export default function Page() {
  return <WritePage />;
}
