"use client";

import { Button } from "@/shared/ui";
import { useState, useEffect } from "react";
import { postBoardDetail } from "../api/commentDetail";

export default function DiscussionFooter({ postPk }: { postPk: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      setComment("");
    }, 300);
  };

  const handleSubmit = async () => {
    // 댓글 등록 로직
    console.log("댓글 등록:", postPk, comment);
    const response = await postBoardDetail(postPk, comment);
    if (response) {
      console.log("댓글 등록 성공:", response);
    } else {
      console.log("댓글 등록 실패");
    }
    handleClose();
  };

  return (
    <>
      {/* 배경 - 모달이 열릴 때만 표시 */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${isAnimating ? "opacity-100" : "opacity-0"
            }`}
          onClick={handleClose}
        />
      )}

      {/* Footer - input이 올라가면서 확장 */}
      <footer
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.06)] max-w-max-width mx-auto transition-all duration-300 z-50 ${isAnimating ? "h-[28vh]" : "h-footer"
          }`}
      >
        <div className="flex flex-col h-full px-5 pt-6 pb-[10px]">
          {/* 설명칸 - 댓글창 아래에서 시작해서 위로 올라옴 */}
          <div
            className={`overflow-y-auto transition-all duration-300 ${isAnimating
              ? "opacity-100 translate-y-0 max-h-[150px] mb-4"
              : "opacity-0 translate-y-full max-h-0 mb-0"
              }`}
            style={{
              transitionDelay: isAnimating ? "200ms" : "0ms",
            }}
          >
            <p className="font-semibold-15 text-gray-007">
              어그리는 격해지는 토론보다
              <br />
              관점이 더해지는 소통의 장을 지향해요!
            </p>
            <p className="font-regular-14 text-gray-005 mt-2">
              한 게시글에 최대 3개씩,
              <br />
              50자 이내로 짧지만 또렷하게 당신의 생각을 들려주세요.
            </p>
          </div>

          {/* 입력 영역 */}
          <div className="flex gap-2 items-center mt-auto">
            {!isOpen ? (
              <input
                onClick={handleInputClick}
                className="w-full h-10 rounded-full bg-gray-002 font-regular-13 placeholder:text-gray-003 px-[14px] py-[10px] cursor-pointer"
                placeholder="토론에 참여할 의견을 작성해주세요.."
                readOnly
              />
            ) : (
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={`w-full rounded-xl bg-gray-002 font-regular-14 placeholder:text-gray-003 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-004 transition-all duration-300 ${isAnimating ? "min-h-[40px]" : "min-h-0"
                  }`}
                placeholder="의견을 작성해주세요..."
                autoFocus
              />
            )}
            <Button
              size="sm"
              className={`rounded-full font-semibold-14 transition-all duration-300 ${isAnimating ? "h-auto" : "h-full"
                }`}
              text="등록"
              onClick={isOpen ? handleSubmit : undefined}
              disabled={isOpen && !comment.trim()}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
