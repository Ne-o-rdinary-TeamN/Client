import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function TextField({ placeholder, ...props }: TextFieldProps) {
  return (
    <input
      className="rounded-[14px] h-[48px] w-full bg-blue-001 box-border px-[22px] py-[15px] focus:outline-none font-regular-14 placeholder:text-blue-003 placeholder:font-regular-14 "
      placeholder={placeholder}
      {...props}
    />
  );
}
