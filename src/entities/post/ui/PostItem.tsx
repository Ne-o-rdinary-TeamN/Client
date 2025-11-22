import { Button } from "@/shared/ui";
import UserIcon from "@/shared/ui/icons/UserIcon";
import Image from "next/image";
import type { Post } from "../model/post";
import { cn } from "@/shared/lib/cn";

export default function PostItem({
  title,
  totalCount,
  agree,
  disagree,
  agreeRate,
  disagreeRate,
  agreeCount,
  disagreeCount,
  hashtags,
  participated,
}: Post) {
  return (
    <div className="w-full h-64 bg-white rounded-2xl">
      <div className="flex flex-col  px-4">
        <div className="flex items-center justify-center gap-2 mt-3">
          <UserIcon
            className={cn(participated ? "text-blue-002" : "text-gray-003")}
          />
          <h2
            className={cn(
              "font-regular-12 text-gray-004",
              participated ? "text-blue-004" : "text-gray-004"
            )}
          >
            {participated ? "참여완료!" : `${totalCount}명 참여`}
          </h2>
        </div>
        <p className="font-semibold-16 text-gray-007 text-center mt-3">
          {title}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          {hashtags.map((hashtag) => (
            <p className="font-regular-13 text-gray-004" key={hashtag}>
              #{hashtag}
            </p>
          ))}
        </div>
        {participated ? (
          <ResultButton
            agree={agree}
            disagree={disagree}
            agreeRate={agreeRate}
            disagreeRate={disagreeRate}
            agreeCount={agreeCount}
            disagreeCount={disagreeCount}
          />
        ) : (
          <ParticipateButton agree={agree} disagree={disagree} />
        )}
        <Button
          text="토론하러 가기"
          size="lg"
          variant="gray"
          className="w-full mt-2 font-semibold-14"
        />
      </div>
    </div>
  );
}

function ResultButton({
  agreeRate,
  disagreeRate,
  agreeCount,
  disagreeCount,
  agree,
  disagree,
}: {
  agreeRate: number;
  disagreeRate: number;
  agreeCount: number;
  disagreeCount: number;
  agree: string;
  disagree: string;
}) {
  return (
    <div className="flex w-full items-end gap-2 mt-3">
      <div
        className="relative flex flex-col"
        style={{
          width: `${agreeRate}%`,
          maxWidth: "60%",
          minWidth: "40%",
        }}
      >
        {agreeRate >= disagreeRate && (
          <Image
            className="absolute -top-6 left-4 z-10"
            src="/images/approve.svg"
            alt="approve"
            width={41}
            height={36}
          />
        )}
        <button
          className={`${
            agreeRate >= disagreeRate ? "bg-blue-003" : "bg-blue-001"
          } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
          style={{
            height: `${48 + (agreeRate - 50) * 1.2}px`,
            minHeight: "48px",
            maxHeight: "60px",
          }}
        >
          <h2>찬성</h2>
          <p className="font-regular-12 text-gray-001">
            {agreeRate}%(
            {agreeCount}
            명)
          </p>
        </button>
        <p className="font-semibold-13 text-blue-004 mt-2 ml-2">{agree}</p>
      </div>
      <div
        className="relative flex flex-col"
        style={{
          width: `${disagreeRate}%`,
          maxWidth: "60%",
          minWidth: "40%",
        }}
      >
        {agreeRate <= disagreeRate && (
          <Image
            className="absolute -top-6 right-4 z-10"
            src="/images/opposite.svg"
            alt="opposite"
            width={41}
            height={36}
          />
        )}
        <button
          className={`${
            agreeRate <= disagreeRate ? "bg-red-003" : "bg-red-001"
          } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
          style={{
            height: `${48 + (disagreeRate - 50) * 1.2}px`,
            minHeight: "50px",
            maxHeight: "60px",
          }}
        >
          <h2>반대</h2>
          <p className="font-regular-12 text-gray-001">
            {disagreeRate}%(
            {disagreeCount}명)
          </p>
        </button>
        <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto">
          {disagree}
        </p>
      </div>
    </div>
  );
}

function ParticipateButton({
  agree,
  disagree,
}: {
  agree: string;
  disagree: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 mt-5">
      <div className="flex-1 relative">
        <Image
          className="absolute -top-6 left-4 z-10"
          src="/images/approve.svg"
          alt="approve"
          width={41}
          height={36}
        />
        <button className="bg-linear-to-r from-[#2E96FD] to-[#8CC5FD] text-white rounded-2xl py-2 px-4 w-full h-13 font-semibold-14 relative">
          <h2>찬성하기</h2>
        </button>
        <p className="font-semibold-13 text-blue-004 mt-2 ml-2">{agree}</p>
      </div>
      <div className="flex-1 flex flex-col relative">
        <Image
          className="absolute -top-6 right-4 z-10"
          src="/images/opposite.svg"
          alt="opposite"
          width={41}
          height={36}
        />
        <button className="bg-linear-to-r from-[#FFA2AA] to-[#FB6F7A] text-white rounded-2xl py-2 px-4 w-full h-13 font-semibold-14 relative">
          <h2>반대하기</h2>
        </button>
        <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto">
          {disagree}
        </p>
      </div>
    </div>
  );
}
