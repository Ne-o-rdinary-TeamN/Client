"use client";

import Link from "next/link";
import React, { useState } from "react";
import LogoutModal from "@/features/auth/ui/LogoutModal";
import WithdrawModal from "@/features/auth/ui/WithdrawModal";
import { UserInfoResponse } from "../model/user";

interface MydiscussionProps {
  userInfo: UserInfoResponse;
}

function Mydiscussion({ userInfo }: MydiscussionProps) {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <>
      <div>
        <h1 className="font-bold-20 text-gray-007 mb-6">마이페이지</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h2 className="font-semibold-18 text-gray-007">
              {userInfo.name}님
            </h2>
            <span className="flex font-medium-13 text-gray-005 items-end">
              {userInfo.userId}
            </span>
          </div>
          <div className="w-full flex gap-2 mt-2">
            <Link
              href="/mypage/register"
              className="w-full font-semibold-16 flex flex-col justify-center items-center bg-blue-003 rounded-xl p-3"
            >
              <h3 className="font-regular-14 text-gray-100">등록한 토론</h3>
              <h3 className="font-semibold-14 text-gray-100">
                {userInfo.createdCnt}
              </h3>
            </Link>
            <Link
              href="/mypage/join"
              className="w-full font-semibold-16 flex flex-col justify-center items-center bg-white text-blue-004 rounded-xl p-3"
            >
              <h3 className="font-regular-14 ">참여한 토론</h3>
              <h3 className="font-semibold-14 ">{userInfo.joinedCnt}</h3>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-2 mt-2 bg-white rounded-xl p-3 px-4">
            <button
              onClick={() => setIsLogoutModalOpen(true)}
              className="w-full font-regular-14 text-start bg-white text-gray-005 rounded-xl py-1"
            >
              로그아웃
            </button>
            <hr className="border border-gray-002" />
            <button
              onClick={() => setIsWithdrawModalOpen(true)}
              className="w-full font-regular-14 text-start bg-white text-gray-005 rounded-xl py-1"
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </div>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
      />
    </>
  );
}

export default Mydiscussion;
