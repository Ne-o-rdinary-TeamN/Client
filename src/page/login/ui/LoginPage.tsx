import Image from "next/image";
import LoginTextField from "./LoginTextField";
import LoginButton from "./LoginButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid place-items-center w-full p-spacing-side">
      <section className="space-y-[30px] w-full flex flex-col justify-center items-center">
        <section className="space-y-[6px]">
          <Image src="/logo-entry.svg" alt="logo" width={180} height={50} />
          <p className="font-medium-14 text-blue-004 text-center">
            어그리? 정말 동의해?
          </p>
        </section>
        <section className="w-full space-y-2">
          <LoginTextField placeholder="아이디" />
          <LoginTextField placeholder="비밀번호" />
        </section>
        <section className="w-full space-y-2">
          <LoginButton text="로그인" />
          <LoginButton text="회원가입" outline />
        </section>
      </section>
    </div>
  );
}
