"use client";

import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

interface HeaderProps {
  title: string;
  icon: ReactNode;
}

export default function Header({ title, icon }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="w-full flex items-center justify-center h-[72px] relative">
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
