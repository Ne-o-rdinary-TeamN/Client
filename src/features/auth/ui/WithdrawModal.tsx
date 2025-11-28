"use client";
import { useRouter } from "next/navigation";
import Modal from "@/shared/ui/Modal";
import { withdraw } from "../action/submitWithdraw";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const router = useRouter();

  const handleConfirm = async () => {
    try {
      const result = await withdraw();
      if (result.success) {
        router.push("/");
        router.refresh();
      } else {
        alert(result.error || "회원탈퇴에 실패했습니다.");
      }
    } catch (error) {
      console.error("Withdraw error:", error);
      alert("회원탈퇴 중 오류가 발생했습니다.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="회원탈퇴"
      message="정말 어그리를 탈퇴하시겠습니까?"
      confirmText="탈퇴하기"
      cancelText="취소"
      onConfirm={handleConfirm}
      variant="danger"
    />
  );
}
