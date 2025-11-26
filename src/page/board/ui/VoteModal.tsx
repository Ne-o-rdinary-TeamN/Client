"use client";

import { useState } from "react";
import RightArrowIcon from "@/shared/ui/icons/RightArrow";
import { ParticipateButton } from "@/entities/post/ui/PostItem";
import UserIcon from "@/shared/ui/icons/UserIcon";

type VoteModalProps = {
  postPk: number;
  agreeRate: number;
  disagreeRate: number;
  agreeCount: number;
  disagreeCount: number;
  agree: boolean;
  disagree: boolean;
  participated: boolean;
  totalCount: number;
  title: string;
  hashtags: string[];
};

export default function VoteModal({
  participated,
  ...voteProps
}: VoteModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (participated) {
    return null;
  }

  return (
    <>
      <button
        className="flex items-center gap-1 text-gray-004 font-medium-13"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        투표하러가기
        <RightArrowIcon className="w-1.5 h-3" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-2xl p-5 w-[90%] max-w-[360px] shadow-lg space-y-4">

            <div className="flex items-center justify-center gap-2">
              <UserIcon
                className="text-gray-003"
              />
              <h2
                className="font-regular-12 text-gray-004"
              >
                {voteProps.totalCount + "명 참여"}
              </h2>
            </div>
            <p className="font-semibold-16 text-gray-007 text-center mt-3">
              {voteProps.title}
            </p>
            <div className="flex items-center justify-center gap-2 mt-1">
              {voteProps.hashtags.map((hashtag, index) => (
                <p className="font-regular-13 text-gray-004" key={`${hashtag}-${index}`}>
                  #{hashtag}
                </p>
              ))}
            </div>
            <ParticipateButton postPk={voteProps.postPk} participated={false} agree={voteProps.agree.toString()} disagree={voteProps.disagree.toString()} />
          </div>
        </div>
      )}
    </>
  );
}

