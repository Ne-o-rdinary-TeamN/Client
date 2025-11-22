"use client";

import { Button } from "@/shared/ui";
import BottomSheetWrapper from "./BottomSheetWrapper";
import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import { useFormContext } from "./FormProvider";
import { useRouter } from "next/navigation";

export default function CategoryBottomSheet() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
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
          category="사회"
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "사회"}
        />
        <CategoryItem
          category="정책"
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "정책"}
        />
        <CategoryItem
          category="경제"
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "경제"}
        />
        <CategoryItem
          category="연애 · 결혼"
          onSelect={setSelectedCategory}
          isSelected={selectedCategory === "연애 · 결혼"}
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
  category: string;
  onSelect: (category: string) => void;
  isSelected: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "border border-gray-003 rounded-[20px] bg-gray-001 px-[15px] py-[7.5px]",
        isSelected ? "bg-blue-003 text-white" : "text-gray-005"
      )}
      onClick={() => onSelect(category)}
    >
      <p className="text-center font-medium-14 text-nowrap">{category}</p>
    </button>
  );
}
