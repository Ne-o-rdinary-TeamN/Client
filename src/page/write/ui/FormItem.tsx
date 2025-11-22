import { cn } from "@/shared/lib/cn";
import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  type ReactNode,
} from "react";

interface FormItemProps {
  title: string;
  children: ReactNode;
  description?: string;
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  approval?: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function FormItem({
  title,
  children,
  description,
}: FormItemProps) {
  return (
    <section className="flex flex-col gap-2 w-full">
      <p className="text-gray-004 font-medium-14">{title}</p>
      {children}
      {description && (
        <p className="text-gray-004 font-regular-12">{description}</p>
      )}
    </section>
  );
}

function TextField({ approval = undefined, ...rest }: TextFieldProps) {
  return (
    <input
      className={cn(
        "rounded-[14px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.02)] w-full bg-white box-border px-[17px] py-[12px] focus:outline-none placeholder:font-regular-14 font-regular-14 placeholder:text-gray-003",
        approval !== undefined
          ? approval === false
            ? "border border-red-002"
            : "border border-blue-002"
          : ""
      )}
      {...rest}
    />
  );
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-[14px] text-start relative shadow-[0px_2px_10px_0px_rgba(0,0,0,0.02)] w-full bg-white box-border px-[17px] py-3 focus:outline-none font-regular-14 text-gray-003"
      {...rest}
    >
      {children}
    </button>
  );
}

FormItem.TextField = TextField;
FormItem.Button = Button;
