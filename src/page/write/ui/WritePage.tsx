"use client";

import CategoryBottomSheet from "./CategoryBottomSheet";
import WritePageContent from "./WritePageContent";
import FormProvider from "./FormProvider";
import { useSearchParams } from "next/navigation";

export default function WritePage() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <FormProvider>
      {modal === "true" && <CategoryBottomSheet />}
      <WritePageContent />
    </FormProvider>
  );
}
