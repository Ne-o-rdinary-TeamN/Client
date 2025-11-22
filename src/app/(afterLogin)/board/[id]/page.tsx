import React from "react";
import { BoardPage } from "@/page/board";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <BoardPage postPk={Number(id)} />
    </>
  );
}
