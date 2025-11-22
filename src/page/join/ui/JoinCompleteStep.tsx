import { Button } from "@/shared/ui";
import JoinStepLayout from "./JoinStepLayout";

export default function JoinCompleteStep({ name }: { name: string }) {
  return (
    <JoinStepLayout>
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex-1 flex flex-col items-center gap-1 justify-center">
          <p className="font-semibold-15 text-gray-004">회원가입 완료</p>
          <p className="text-gray-007 font-bold-22 text-center">
            {name} 님<br />
            환영해요!
          </p>
        </div>
        <Button text="로그인 하러가기" className="self-end" href="/login" />
      </div>
    </JoinStepLayout>
  );
}
