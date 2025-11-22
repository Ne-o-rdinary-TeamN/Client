"use client";

import { useFunnel } from "@use-funnel/browser";
import {
  type CompleteStep,
  type IdStep,
  type NameStep,
  type PasswordStep,
  STEP,
} from "../model/step";
import JoinStep from "./JoinStep";
import JoinCompleteStep from "./JoinCompleteStep";

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
          onNext={(name) =>
            funnel.history.push(STEP.ID, (prev) => ({ ...prev, name }))
          }
        />
      );
    case STEP.ID:
      return (
        <JoinStep
          type="id"
          placeholder="아이디"
          onNext={(id) =>
            funnel.history.push(STEP.PASSWORD, (prev) => ({ ...prev, id }))
          }
        />
      );
    case STEP.PASSWORD: {
      const context = funnel.context as PasswordStep;
      return (
        <JoinStep
          type="password"
          placeholder="비밀번호"
          onNext={(password) => {
            console.log("회원가입:", { ...context, password });
            funnel.history.push(STEP.COMPLETE);
          }}
        />
      );
    }
    case STEP.COMPLETE:
      return <JoinCompleteStep />;
  }
}
