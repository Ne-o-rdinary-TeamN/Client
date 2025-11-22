import UserIcon from "@/shared/ui/icons/UserIcon";
import Image from "next/image";
import React from "react";
import { getBoardDetail } from "../api/boardDetail";

async function Vote({ postPk }: { postPk: number }) {
    const boardDetail = await getBoardDetail(postPk);
    if (!boardDetail) {
        return <div>게시글을 불러오는 중 오류가 발생했습니다.</div>;
    }
    console.log(boardDetail);
    const { title, hashtags, participated, agree, disagree, agreeCount, disagreeCount, agreeRate, disagreeRate } = boardDetail.result;
    return (
        <div>
            <div className="w-full pb-4 mt-header bg-white">
                <div className="flex flex-col px-4">
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <UserIcon className="text-blue-002" />
                        <h2 className="font-regular-12 text-blue-004">참여완료!</h2>
                    </div>
                    <p className="font-bold-20 text-gray-007 text-center mt-3">
                        {title}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        {hashtags.map((hashtag: string) => (
                            <p className="font-regular-13 text-gray-004" key={hashtag}>#{hashtag}</p>
                        ))}
                    </div>
                    <div className="flex w-full items-end gap-2 mt-5">
                        <div
                            className="relative flex flex-col"
                            style={{
                                width: `${agreeRate === 0 ? 50 : agreeRate}%`,
                                maxWidth: "60%",
                                minWidth: "40%",
                            }}
                        >
                            {agreeRate >=
                                disagreeRate && (
                                    <Image
                                        className="absolute -top-6 left-4 z-5"
                                        src="/images/approve.svg"
                                        alt="approve"
                                        width={41}
                                        height={36}
                                    />
                                )}
                            <button
                                className={`${agreeRate >= disagreeRate
                                    ? "bg-blue-003"
                                    : "bg-blue-001"
                                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                                style={{
                                    height: `${48 + (agreeRate - 50) * 1.2}px`,
                                    minHeight: "48px",
                                    maxHeight: "60px",
                                }}
                            >
                                <h2>찬성</h2>
                                <p className="font-regular-12 text-gray-001">
                                    {agreeRate}%({agreeCount}
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
                                width: `${disagreeRate === 0 ? 50 : disagreeRate}%`,
                                maxWidth: "60%",
                                minWidth: "40%",
                            }}
                        >
                            {agreeRate <=
                                disagreeRate && (
                                    <Image
                                        className="absolute -top-6 right-4 z-5"
                                        src="/images/opposite.svg"
                                        alt="opposite"
                                        width={41}
                                        height={36}
                                    />
                                )}
                            <button
                                className={`${agreeRate <= disagreeRate
                                    ? "bg-red-003"
                                    : "bg-red-001"
                                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                                style={{
                                    height: `${48 + (disagreeRate - 50) * 1.2
                                        }px`,
                                    minHeight: "50px",
                                    maxHeight: "60px",
                                }}
                            >
                                <h2>반대</h2>
                                <p className="font-regular-12 text-gray-001">
                                    {disagreeRate}%({disagreeCount}
                                    명)
                                </p>
                            </button>
                            <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto">
                                소비자가 피해본다
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vote;
