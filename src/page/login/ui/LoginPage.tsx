"use client";

import Image from "next/image";
import { Button, TextField } from "@/shared/ui";
import { LoginRequest } from "@/features/auth/types/login";
import { useForm } from "react-hook-form";
import { submitLogin } from "../api/submitLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginRequest>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginRequest) => {
    setIsLoading(true);
    try {
      const result = await submitLogin(data);
      if (result.success) {
        router.push("/");
        router.refresh();
      } else {
        alert(result.error || "로그인에 실패했어요.");
      }
    } catch (error) {
      console.error(error);
      alert("로그인 중 오류가 발생했어요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center w-full px-side">
      <section className="space-y-[30px] w-full flex flex-col justify-center items-center">
        <section className="space-y-[6px]">
          <Image src="/logo-entry.svg" alt="logo" width={180} height={50} />
          <p className="font-medium-14 text-blue-004 text-center">
            어그리? 정말 동의해?
          </p>
        </section>
        <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <TextField placeholder="아이디" {...register("userId")} />
          <TextField
            placeholder="비밀번호"
            type="password"
            {...register("password")}
          />
          <div className="w-full space-y-2 pt-[10px]">
            <Button
              text={isLoading ? "로그인 중..." : "로그인"}
              type="submit"
              disabled={isLoading}
            />
            <Button
              text="회원가입"
              variant="primary-outline"
              href="/join"
              type="button"
            />
          </div>
        </form>
      </section>
    </div>
  );
}
