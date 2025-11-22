"use client";

import { Button } from "@/shared/ui";
import BottomSheetWrapper from "./BottomSheetWrapper";
import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import { useFormContext } from "./FormProvider";
import { useRouter } from "next/navigation";
import { Category } from "../model/form";

const CATEGORY_MAP: Record<string, { value: Category; label: string }> = {
  SOCIAL: { value: "SOCIAL", label: "사회" },
  POLICY: { value: "POLICY", label: "정책" },
  ECONOMY: { value: "ECONOMY", label: "경제" },
  LOVE: { value: "LOVE", label: "연애 · 결혼" },
};

export default function CategoryBottomSheet() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const { setValue } = useFormContext();
  const router = useRouter();

  const handleComplete = () => {
    if (selectedCategory) {
      setValue("category", selectedCategory);
    }
    router.replace("/write");
  };

  return (
    <BottomSheetWrapper>
      <p className="text-start w-full font-semibold-16 text-gray-006 mb-[14px]">
        게시할 글의 카테고리를 선택해주세요
      </p>
      <div className="flex items-center gap-2 w-full mb-[22px]">
        <CategoryItem
          category={CATEGORY_MAP.SOCIAL}
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "SOCIAL"}
        />
        <CategoryItem
          category={CATEGORY_MAP.POLICY}
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "POLICY"}
        />
        <CategoryItem
          category={CATEGORY_MAP.ECONOMY}
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "ECONOMY"}
        />
        <CategoryItem
          category={CATEGORY_MAP.LOVE}
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "LOVE"}
        />
      </div>
      <Button text="완료" onClick={handleComplete} />
    </BottomSheetWrapper>
  );
}

function CategoryItem({
  category,
  onSelect,
  isSelected,
}: {
  category: { value: Category; label: string };
  onSelect: (category: Category) => void;
  isSelected: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "border border-gray-003 rounded-[20px] bg-gray-001 px-[15px] py-[7.5px]",
        isSelected ? "bg-blue-003 text-white" : "text-gray-005"
      )}
      onClick={() => onSelect(category.value)}
    >
      <p className="text-center font-medium-14 text-nowrap">{category.label}</p>
    </button>
  );
}
