import Image from "next/image";
import { Button, TextField } from "@/shared/ui";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid place-items-center w-full px-side">
      <section className="space-y-[30px] w-full flex flex-col justify-center items-center">
        <section className="space-y-[6px]">
          <Image src="/logo-entry.svg" alt="logo" width={180} height={50} />
          <p className="font-medium-14 text-blue-004 text-center">
            어그리? 정말 동의해?
          </p>
        </section>
        <section className="w-full space-y-2">
          <TextField placeholder="아이디" />
          <TextField placeholder="비밀번호" />
        </section>
        <section className="w-full space-y-2">
          <Button text="로그인" />
          <Button text="회원가입" outline href="/join" />
        </section>
      </section>
    </div>
  );
}
