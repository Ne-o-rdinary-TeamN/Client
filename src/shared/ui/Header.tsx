"use client";

import { cn } from "@/shared/lib/cn";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

interface HeaderProps {
  title: string;
  icon: ReactNode;
  className?: string;
}

export default function Header({ title, icon, className }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className={cn(
        "w-full flex items-center justify-center h-[72px] relative",
        className
      )}
    >
      <button
        className="absolute left-0 top-[50%] translate-y-[-50%]"
        onClick={handleBack}
      >
        {icon}
      </button>
      <p className="text-blue-004 font-medium-15">{title}</p>
    </header>
  );
}
