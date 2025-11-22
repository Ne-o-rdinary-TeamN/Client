"use client";

import { useFunnel } from "@use-funnel/browser";
import {
  type CompleteStep,
  type IdStep,
  type NameStep,
  type PasswordStep,
  type UserJoinInfo,
  STEP,
} from "../model/step";
import JoinStep from "./JoinStep";
import JoinCompleteStep from "./JoinCompleteStep";
import { submitJoin } from "../api/submitJoin";

export default function JoinPage() {
  const funnel = useFunnel<{
    [STEP.NAME]: NameStep;
    [STEP.ID]: IdStep;
    [STEP.PASSWORD]: PasswordStep;
    [STEP.COMPLETE]: CompleteStep;
  }>({
    id: "join-funnel",
    initial: {
      step: STEP.NAME,
      context: {},
    },
  });

  switch (funnel.step) {
    case STEP.NAME:
      return (
        <JoinStep
          type="name"
          placeholder="이름"
          onNext={async (name) => {
            await funnel.history.push(STEP.ID, (prev) => ({ ...prev, name }));
          }}
        />
      );
    case STEP.ID:
      return (
        <JoinStep
          type="userId"
          placeholder="아이디"
          onNext={async (userId) => {
            await funnel.history.push(STEP.PASSWORD, (prev) => ({
              ...prev,
              userId,
            }));
          }}
        />
      );
    case STEP.PASSWORD: {
      const context = funnel.context as PasswordStep;
      return (
        <JoinStep
          type="password"
          placeholder="비밀번호"
          onNext={async (password) => {
            alert(JSON.stringify(context));
            alert(password);
            const result = await submitJoin({
              ...context,
              password,
            } as UserJoinInfo);
            if (result.success) {
              funnel.history.push(STEP.COMPLETE);
            } else {
              alert(
                (result as { error: string }).error ?? "회원가입에 실패했어요."
              );
            }
          }}
        />
      );
    }
    case STEP.COMPLETE:
      return <JoinCompleteStep name={funnel.context.name as string} />;
  }
}
