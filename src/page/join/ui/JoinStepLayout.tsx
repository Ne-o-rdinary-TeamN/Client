"use client";

import { Button } from "@/shared/ui";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

interface JoinStepLayoutProps {
  children: ReactNode;
  type?: "name" | "id" | "password";
}

export default function JoinStepLayout({
  children,
  type,
}: JoinStepLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const title = type
    ? type === "name"
      ? "이름을"
      : type === "id"
      ? "아이디를"
      : "비밀번호를"
    : "";

  return (
    <div className="min-h-screen flex flex-col w-full px-side">
      <header className="w-full flex items-center justify-center h-[72px] relative">
        <button
          className="absolute left-0 top-[50%] translate-y-[-50%]"
          onClick={handleBack}
        >
          <ChevronLeft size={24} className="text-blue-004" />
        </button>
        {type && <span className="text-blue-004 font-medium-15">회원가입</span>}{" "}
      </header>
      {type && (
        <p className="font-bold-20 mb-5">
          어그리 계정 생성을 위해
          <br />
          {title} 입력해주세요.
        </p>
      )}
      <div className="flex-1 flex flex-col pb-[10px]">{children}</div>
    </div>
  );
}

function BackButton() {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <Button
      text="이전"
      outline
      className="w-fit text-nowrap"
      onClick={handleBack}
    />
  );
}

JoinStepLayout.BackButton = BackButton;
