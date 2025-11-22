"use client";

import { cn } from "@/shared/lib/cn";
import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "sm" | "lg";
  variant?:
    | "primary"
    | "primary-outline"
    | "primary-disabled"
    | "secondary"
    | "active"
    | "outline"
    | "gray";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const buttonVariants = cva(
  " disabled:bg-blue-002 focus:outline-none cursor-pointer font-semibold-16 h-[48px] text-nowrap w-full flex items-center justify-center box-border active:brightness-90 px-[22px] py-[15px]",
  {
    variants: {
      size: {
        sm: "h-[34px] box-border px-[15px] rounded-[20px] w-fit py-[7.5px] font-medium-14",
        lg: "h-[48px] box-border px-[22px] rounded-[14px] py-[15px] w-full font-semibold-16",
      },
      variant: {
        primary: "bg-blue-004 text-white",
        "primary-outline": "border bg-white border-blue-004 text-blue-004",
        "primary-disabled": "bg-blue-002 text-white",
        secondary: "bg-white text-gray-005",
        gray: "bg-gray-002 text-gray-004",
        active: "bg-blue-003 text-white",
        outline: "border bg-white border-gray-003 text-gray-005",
      },
    },
  }
);

export default function Button({
  text,
  size = "lg",
  variant = "primary",
  className,
  onClick,
  href,
  ...rest
}: ButtonProps) {
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
      {...rest}
      className={cn(buttonVariants({ size, variant }), className)}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
