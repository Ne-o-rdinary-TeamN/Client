"use client";
import { Button } from "@/shared/ui";
import UserIcon from "@/shared/ui/icons/UserIcon";
import Image from "next/image";
import React, { useState } from "react";

const categories = ["사회", "정책", "경제", "연애 · 결혼"];

// 더미 투표 데이터
const dummyVoteData = {
  approvePercent: 60,
  approveCount: 60,
  oppositePercent: 40,
  oppositeCount: 40,
  totalCount: 100,
};

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("사회");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1 className="font-bold-20 fixed w-max-width mx-auto z-999 top-0 left-0 right-0 bg-gray-002 px-side text-gray-007 h-header flex items-center">
        투표
      </h1>
      <div className="px-side relative pb-footer">
        <div className="flex mt-header gap-2 rounded-xl font-medium-14">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Button
                size="sm"
                text={category}
                key={category}
                variant={isSelected ? "active" : "secondary"}
                onClick={() => handleCategoryClick(category)}
              />
            );
          })}
        </div>
        {/* 카테고리 투표 목록 */}
        <div className="mt-4 flex flex-col gap-4">
          <div className="w-full h-64 bg-white rounded-2xl">
            <div className="flex flex-col  px-4">
              <div className="flex items-center justify-center gap-2 mt-3">
                <UserIcon className="text-gray-003" />
                <h2 className="font-regular-12 text-gray-004">326명 참여</h2>
              </div>
              <p className="font-semibold-16 text-gray-007 text-center mt-3">
                새벽배송 금지, 당신의 생각은?
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <p className="font-regular-13 text-gray-004">#새벽배송</p>
                <p className="font-regular-13 text-gray-004">#과로</p>
                <p className="font-regular-13 text-gray-004">#노동</p>
              </div>
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
                  <p className="font-semibold-13 text-blue-004 mt-2 ml-2">
                    과로 방지 가능하다
                  </p>
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
                    소비자가 피해본다
                  </p>
                </div>
              </div>
              <Button
                text="토론하러 가기"
                size="lg"
                variant="gray"
                className="w-full mt-2 font-semibold-14"
              />
            </div>
          </div>
          <div className="w-full h-64 bg-white rounded-2xl">
            <div className="flex flex-col  px-4">
              <div className="flex items-center justify-center gap-2 mt-3">
                <UserIcon className="text-blue-002" />
                <h2 className="font-regular-12 text-blue-004">참여완료!</h2>
              </div>
              <p className="font-semibold-16 text-gray-007 text-center mt-3">
                새벽배송 금지, 당신의 생각은?
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <p className="font-regular-13 text-gray-004">#새벽배송</p>
                <p className="font-regular-13 text-gray-004">#과로</p>
                <p className="font-regular-13 text-gray-004">#노동</p>
              </div>
              <div className="flex w-full items-end gap-2 mt-3">
                <div
                  className="relative flex flex-col"
                  style={{
                    width: `${dummyVoteData.approvePercent}%`,
                    maxWidth: "60%",
                    minWidth: "40%",
                  }}
                >
                  {dummyVoteData.approvePercent >=
                    dummyVoteData.oppositePercent && (
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
                      dummyVoteData.approvePercent >=
                      dummyVoteData.oppositePercent
                        ? "bg-blue-003"
                        : "bg-blue-001"
                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                      height: `${
                        48 + (dummyVoteData.approvePercent - 50) * 1.2
                      }px`,
                      minHeight: "48px",
                      maxHeight: "60px",
                    }}
                  >
                    <h2>찬성</h2>
                    <p className="font-regular-12 text-gray-001">
                      {dummyVoteData.approvePercent}%(
                      {dummyVoteData.approveCount}
                      명)
                    </p>
                  </button>
                  <p className="font-semibold-13 text-blue-004 mt-2 ml-2">
                    과로 방지 가능하다
                  </p>
                </div>
                <div
                  className="relative flex flex-col"
                  style={{
                    width: `${dummyVoteData.oppositePercent}%`,
                    maxWidth: "60%",
                    minWidth: "40%",
                  }}
                >
                  {dummyVoteData.approvePercent <=
                    dummyVoteData.oppositePercent && (
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
                      dummyVoteData.approvePercent <=
                      dummyVoteData.oppositePercent
                        ? "bg-red-003"
                        : "bg-red-001"
                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                      height: `${
                        48 + (dummyVoteData.oppositePercent - 50) * 1.2
                      }px`,
                      minHeight: "50px",
                      maxHeight: "60px",
                    }}
                  >
                    <h2>반대</h2>
                    <p className="font-regular-12 text-gray-001">
                      {dummyVoteData.oppositePercent}%(
                      {dummyVoteData.oppositeCount}명)
                    </p>
                  </button>
                  <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto">
                    소비자가 피해본다
                  </p>
                </div>
              </div>
              <Button
                text="토론하러 가기"
                size="lg"
                variant="gray"
                className="w-full mt-2 font-semibold-14"
              />
            </div>
          </div>
          <div className="w-full h-64 bg-white rounded-2xl">
            <div className="flex flex-col  px-4">
              <div className="flex items-center justify-center gap-2 mt-3">
                <UserIcon className="text-blue-002" />
                <h2 className="font-regular-12 text-blue-004">참여완료!</h2>
              </div>
              <p className="font-semibold-16 text-gray-007 text-center mt-3">
                새벽배송 금지, 당신의 생각은?
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <p className="font-regular-13 text-gray-004">#새벽배송</p>
                <p className="font-regular-13 text-gray-004">#과로</p>
                <p className="font-regular-13 text-gray-004">#노동</p>
              </div>
              <div className="flex w-full items-end gap-2 mt-3">
                <div
                  className="relative flex flex-col"
                  style={{
                    width: `${dummyVoteData.approvePercent}%`,
                    maxWidth: "60%",
                    minWidth: "40%",
                  }}
                >
                  {dummyVoteData.approvePercent >=
                    dummyVoteData.oppositePercent && (
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
                      dummyVoteData.approvePercent >=
                      dummyVoteData.oppositePercent
                        ? "bg-blue-003"
                        : "bg-blue-001"
                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                      height: `${
                        48 + (dummyVoteData.approvePercent - 50) * 1.2
                      }px`,
                      minHeight: "48px",
                      maxHeight: "60px",
                    }}
                  >
                    <h2>찬성</h2>
                    <p className="font-regular-12 text-gray-001">
                      {dummyVoteData.approvePercent}%(
                      {dummyVoteData.approveCount}
                      명)
                    </p>
                  </button>
                  <p className="font-semibold-13 text-blue-004 mt-2 ml-2">
                    과로 방지 가능하다
                  </p>
                </div>
                <div
                  className="relative flex flex-col"
                  style={{
                    width: `${dummyVoteData.oppositePercent}%`,
                    maxWidth: "60%",
                    minWidth: "40%",
                  }}
                >
                  {dummyVoteData.approvePercent <=
                    dummyVoteData.oppositePercent && (
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
                      dummyVoteData.approvePercent <=
                      dummyVoteData.oppositePercent
                        ? "bg-red-003"
                        : "bg-red-001"
                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                      height: `${
                        48 + (dummyVoteData.oppositePercent - 50) * 1.2
                      }px`,
                      minHeight: "50px",
                      maxHeight: "60px",
                    }}
                  >
                    <h2>반대</h2>
                    <p className="font-regular-12 text-gray-001">
                      {dummyVoteData.oppositePercent}%(
                      {dummyVoteData.oppositeCount}명)
                    </p>
                  </button>
                  <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto">
                    소비자가 피해본다
                  </p>
                </div>
              </div>
              <Button
                text="토론하러 가기"
                size="lg"
                variant="gray"
                className="w-full mt-2 font-semibold-14"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
