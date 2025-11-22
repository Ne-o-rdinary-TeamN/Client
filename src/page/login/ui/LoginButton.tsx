"use client";

import { cn } from "@/shared/lib/cn";

export default function LoginButton({
  text,
  outline,
  onClick,
}: {
  text: string;
  outline?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn(
        "rounded-[14px] focus:outline-none font-semibold-16 h-[48px] w-full flex items-center justify-center box-border active:brightness-90 px-[22px] py-[15px]",
        outline
          ? "border bg-gray-001 border-blue-004 text-blue-004"
          : "bg-blue-004 text-white"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
