"use client";

import { Button, Header } from "@/shared/ui";
import { ChevronDown, X } from "lucide-react";
import FormItem from "./FormItem";
import { useFormContext } from "./FormProvider";
import { cn } from "@/shared/lib/cn";

function WriteForm() {
  const { register, isFormValid, watch } = useFormContext();
  const selectedCategory = watch("category");

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
              {selectedCategory || "카테고리를 선택해주세요."}
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
            {...register("opinion1")}
          />
          <FormItem.TextField
            placeholder="반대 의견을 작성해주세요."
            approval={false}
            {...register("opinion2")}
          />
        </FormItem>
        <FormItem title="뉴스 링크">
          <FormItem.TextField
            placeholder="의견을 나누고 싶은 뉴스기사 링크를 첨부해주세요."
            {...register("newsLink")}
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
        />
        <Button type="submit" text="완료" disabled={!isFormValid} />
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
