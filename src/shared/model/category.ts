export type Category = "SOCIAL" | "POLITICS" | "ECONOMY" | "LOVE";

export const CATEGORY_LABEL: Record<Category, string> = {
  SOCIAL: "사회",
  POLITICS: "정책",
  ECONOMY: "경제",
  LOVE: "연애 · 결혼",
};

export const CATEGORY_MAP: Record<string, { value: Category; label: string }> =
  {
    SOCIAL: { value: "SOCIAL", label: "사회" },
    POLITICS: { value: "POLITICS", label: "정책" },
    ECONOMY: { value: "ECONOMY", label: "경제" },
    LOVE: { value: "LOVE", label: "연애 · 결혼" },
  };

export const CATEGORIES = Object.values(CATEGORY_MAP);
