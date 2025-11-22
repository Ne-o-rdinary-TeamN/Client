import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(10, "주제 제목은 최소 10자 이상이어야 합니다."),
  newsUrl: z
    .string()
    .url("올바른 URL 형식이 아닙니다.")
    .optional()
    .or(z.literal("")),
  content: z.string().optional().or(z.literal("")),
  agree: z.string().min(10, "찬성 의견은 최소 10자 이상이어야 합니다."),
  disagree: z.string().min(10, "반대 의견은 최소 10자 이상이어야 합니다."),
  category: z.enum(["SOCIAL", "POLICY", "ECONOMY", "LOVE"], {
    message: "카테고리를 선택해주세요.",
  }),
  hashtags: z
    .array(z.string())
    .min(3, "해시태그는 최소 3개 이상이어야 합니다."),
});

export type FormState = z.infer<typeof formSchema>;
export type Category = "SOCIAL" | "POLICY" | "ECONOMY" | "LOVE";
