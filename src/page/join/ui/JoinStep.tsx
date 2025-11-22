import { Button, TextField } from "@/shared/ui";
import JoinStepLayout from "./JoinStepLayout";

interface JoinStepProps {
  type: "name" | "id" | "password";
  placeholder: string;
  onNext: (value: string) => void;
}

export default function JoinStep({ type, placeholder, onNext }: JoinStepProps) {
  return (
    <JoinStepLayout type={type}>
      <TextField
        placeholder={placeholder}
        type={type === "password" ? "password" : "text"}
      />
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex w-full items-center gap-2">
          {type !== "name" && <JoinStepLayout.BackButton />}
          <Button text="다음" className="self-end" onClick={() => onNext("")} />
        </div>
      </div>
    </JoinStepLayout>
  );
}
