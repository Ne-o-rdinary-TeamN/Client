"use client";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  variant?: "default" | "danger";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  variant = "default",
}: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 애니메이션 시작
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      // 모달이 닫힐 때도 비동기로 처리
      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl p-6 w-[90%] max-w-[320px] shadow-lg transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="font-bold-20 text-gray-007 mb-3">{title}</h2>
        <p className="font-regular-16 text-gray-006 mb-6 whitespace-pre-line">
          {message}
        </p>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-semibold-14 bg-gray-002 text-gray-005"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-1 py-3 rounded-xl font-semibold-14 ${
              variant === "danger"
                ? "bg-red-004 text-white"
                : "bg-blue-004 text-white"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
