import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { AuthService } from "@/shared/lib/auth";

export default async function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthenticated = await AuthService.isAuthenticated();
  if (!isAuthenticated) {
    redirect("/login");
  }

  return <>{children}</>;
}
