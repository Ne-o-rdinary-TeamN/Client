"use client";

import { createContext, ReactNode, useContext } from "react";
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

interface FormContextType {
  register: UseFormRegister<FormState>;
  handleSubmit: UseFormHandleSubmit<FormState>;
  errors: FieldErrors<FormState>;
  setValue: UseFormSetValue<FormState>;
  watch: UseFormWatch<FormState>;
  isFormValid: boolean;
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
      category: "",
      title: "",
      opinion1: "",
      opinion2: "",
      newsLink: "",
      hashtags: [],
    },
  });

  const onSubmit = (data: FormState) => {
    console.log("Form submitted:", data);
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
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="contents">
        {children}
      </form>
    </FormContext.Provider>
  );
}
