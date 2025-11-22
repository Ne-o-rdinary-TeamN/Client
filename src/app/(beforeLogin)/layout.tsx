import { ReactNode } from "react";

export default function BeforeLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="w-full min-h-screen bg-white">{children}</div>;
}
