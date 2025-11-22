"use client";

import { cn } from "@/shared/lib/cn";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  outline?: boolean;
  onClick?: () => void;
  href?: string;
}

export default function Button({ text, outline, onClick, href }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      onClick?.();
    }
  };

  return (
    <button
      className={cn(
        "rounded-[14px] focus:outline-none font-semibold-16 h-[48px] w-full flex items-center justify-center box-border active:brightness-90 px-[22px] py-[15px]",
        outline
          ? "border bg-gray-001 border-blue-004 text-blue-004"
          : "bg-blue-004 text-white"
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
