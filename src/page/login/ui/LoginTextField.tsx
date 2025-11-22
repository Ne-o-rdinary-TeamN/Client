interface LoginTextFieldProps {
  placeholder: string;
}

export default function LoginTextField({ placeholder }: LoginTextFieldProps) {
  return (
    <input
      className="rounded-[14px] h-[48px] w-full bg-blue-001 box-border px-[22px] py-[15px] focus:outline-none placeholder:text-blue-003 placeholder:font-regular-14 "
      placeholder={placeholder}
    />
  );
}
