"use client";

import { Button, Header } from "@/shared/ui";
import { ChevronDown, X } from "lucide-react";
import FormItem from "./FormItem";
import { useFormContext } from "./FormProvider";
import { cn } from "@/shared/lib/cn";
import { Category } from "../model/form";
import { useState } from "react";

const CATEGORY_LABEL: Record<Category, string> = {
  SOCIAL: "사회",
  POLICY: "정책",
  ECONOMY: "경제",
  LOVE: "연애 · 결혼",
};

function WriteForm() {
  const { register, isFormValid, watch, setValue, errors, isSubmitting } =
    useFormContext();
  const selectedCategory = watch("category");
  const [hashtagInput, setHashtagInput] = useState("");

  return (
    <>
      <div className="space-y-5">
        <FormItem title="카테고리 선택">
          <FormItem.Button replace href="/write?modal=true">
            <span
              className={cn(
                selectedCategory ? "text-gray-005" : "text-gray-003"
              )}
            >
              {selectedCategory
                ? CATEGORY_LABEL[selectedCategory]
                : "카테고리를 선택해주세요."}
            </span>
            <ChevronDown
              size={24}
              className="text-gray-003 absolute right-[18px] top-[50%] translate-y-[-50%]"
            />
          </FormItem.Button>
        </FormItem>
        <FormItem title="주제 제목" description="· 최소 10자">
          <FormItem.TextField
            placeholder="토론 주제 제목을 입력해주세요."
            {...register("title")}
          />
        </FormItem>
        <FormItem title="토론 의견" description="· 최소 10자">
          <FormItem.TextField
            placeholder="찬성 의견을 작성해주세요."
            approval
            {...register("agree")}
          />
          <FormItem.TextField
            placeholder="반대 의견을 작성해주세요."
            approval={false}
            {...register("disagree")}
          />
        </FormItem>
        <FormItem title="뉴스 링크">
          <FormItem.TextField
            placeholder="의견을 나누고 싶은 뉴스기사 링크를 첨부해주세요."
            {...register("newsUrl")}
          />
        </FormItem>
      </div>
      <section className="fixed shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.02)] bg-white w-full bottom-0 left-0 right-0 px-side pb-[10px] pt-[13px]">
        <div className="mb-2 w-full flex items-center gap-2">
          <span className="text-gray-004 font-medium-14">해시태그</span>
          <span className="text-gray-003 font-regular-13">최소 3개</span>
        </div>
        <input
          className="focus:outline-none placeholder:font-regular-14 w-full font-regular-14 placeholder:text-gray-003 mb-[13px]"
          placeholder="#해시태그 #해시태그 #해시태그"
          value={hashtagInput}
          onChange={(e) => {
            const value = e.target.value;
            setHashtagInput(value);
            const hashtags = value
              .split(" ")
              .map((tag) => tag.trim())
              .filter((tag) => tag.length > 0);
            setValue("hashtags", hashtags, { shouldValidate: true });
          }}
        />
        {errors.hashtags && (
          <p className="text-red-500 text-sm mb-2">{errors.hashtags.message}</p>
        )}
        <Button
          type="submit"
          text={isSubmitting ? "제출 중..." : "완료"}
          disabled={!isFormValid || isSubmitting}
          className="active:brightness-90"
        />
      </section>
    </>
  );
}

export default function WritePageContent() {
  return (
    <div className="min-h-screen flex flex-col w-full px-side relative">
      <Header title="글쓰기" icon={<X size={24} className="text-blue-004" />} />
      <WriteForm />
    </div>
  );
}
