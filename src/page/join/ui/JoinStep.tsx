"use client";

import { useEffect, useState } from "react";
import { Button, TextField } from "@/shared/ui";
import JoinStepLayout from "./JoinStepLayout";

interface JoinStepProps {
  type: "name" | "userId" | "password";
  placeholder: string;
  onNext: (value: string) => void | Promise<void>;
}

export default function JoinStep({ type, placeholder, onNext }: JoinStepProps) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setValue("");
  }, [type]);

  const handleNext = async () => {
    if (!value.trim()) {
      alert("값을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      await onNext(value);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JoinStepLayout type={type}>
      <TextField
        placeholder={placeholder}
        type={type === "password" ? "password" : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isLoading) {
            handleNext();
          }
        }}
      />
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex w-full items-center gap-2">
          {type !== "name" && <JoinStepLayout.BackButton />}
          <Button
            text={isLoading ? "처리중..." : "다음"}
            className="self-end"
            onClick={handleNext}
            disabled={isLoading}
          />
        </div>
      </div>
    </JoinStepLayout>
  );
}
