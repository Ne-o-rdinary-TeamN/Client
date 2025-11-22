import { Suspense } from "react";
import { WritePage } from "@/page/write";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <WritePage />
    </Suspense>
  );
}
