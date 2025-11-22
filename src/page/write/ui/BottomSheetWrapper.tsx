"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function BottomSheetWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.replace("/write")}
      className="absolute z-10 inset-0 bg-[rgba(25,31,40,0.60)]"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white z-999 rounded-t-[22px] flex flex-col items-center justify-center pt-[15px] absolute left-0 right-0 px-side pb-[10px] bottom-0 shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.02)]"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-14 h-[5px] bg-gray-300 rounded-[3px] mb-[13px]" />
        {children}
      </motion.div>
    </div>
  );
}
