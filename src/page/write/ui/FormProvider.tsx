"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormState, formSchema } from "../model/form";
import { submitWrite } from "../api/submitWrite";
import { useRouter } from "next/navigation";

interface FormContextType {
  register: UseFormRegister<FormState>;
  handleSubmit: UseFormHandleSubmit<FormState>;
  errors: FieldErrors<FormState>;
  setValue: UseFormSetValue<FormState>;
  watch: UseFormWatch<FormState>;
  isFormValid: boolean;
  isSubmitting: boolean;
}

const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
}

export default function FormProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<FormState>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      newsUrl: "",
      content: "",
      agree: "",
      disagree: "",
      category: undefined,
      hashtags: [],
    },
  });

  const onSubmit = async (data: FormState) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    console.log("Form submitted:", data);

    try {
      const response = await submitWrite(data);
      if ("isSuccess" in response && response.isSuccess) {
        alert("글 작성이 완료되었습니다!");
        router.push("/");
      }
    } catch (error) {
      console.error("제출 중 에러:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        setValue,
        watch,
        isFormValid: isValid,
        isSubmitting,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="contents">
        {children}
      </form>
    </FormContext.Provider>
  );
}
