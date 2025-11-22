"use client";

import { Button } from "@/shared/ui";
import { CATEGORIES, Category } from "@/shared/model/category";
import { useState } from "react";

export default function CategoryHeader() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("SOCIAL");

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex mt-header gap-2 rounded-xl font-medium-14">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category.value;
        return (
          <Button
            size="sm"
            text={category.label}
            key={category.value}
            variant={isSelected ? "active" : "secondary"}
            onClick={() => handleCategoryClick(category.value)}
          />
        );
      })}
    </div>
  );
}
