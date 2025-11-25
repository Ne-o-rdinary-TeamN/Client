import { Button } from "@/shared/ui";
import { CATEGORIES, Category } from "@/shared/model/category";

export default function PostCategory({
  selectedCategory,
}: {
  selectedCategory: Category;
}) {
  return (
    <div className="flex mt-header gap-2 rounded-xl font-medium-14">
      {CATEGORIES.map((category, index) => {
        const isSelected = selectedCategory === category.value;
        return (
          <Button
            size="sm"
            text={category.label}
            key={`${category.value}-${index}`}
            variant={isSelected ? "active" : "secondary"}
            href={`/posts/${category.value}`}
          />
        );
      })}
    </div>
  );
}
