"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/shared/ui/Modal";
import { logout } from "../action/submitLogout";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const result = await logout();
      if (result.success) {
        router.refresh();
      } else {
        alert(result.error || "로그아웃에 실패했어요.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("로그아웃 중 오류가 발생했어요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="로그아웃"
      message="정말 어그리를 로그아웃 하시겠습니까?"
      confirmText="로그아웃"
      cancelText="취소"
      onConfirm={handleConfirm}
      variant="default"
    />
  );
}
