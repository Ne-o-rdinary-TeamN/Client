"use client";

import Image from "next/image";

interface VoteButtonsProps {
    agreeRate: number;
    disagreeRate: number;
    agreeCount: number;
    disagreeCount: number;
    agree: boolean;
    disagree: boolean;
    participated: boolean;
}

export default function VoteButtons({
    agreeRate,
    disagreeRate,
    agreeCount,
    disagreeCount,
    agree,
    disagree,
    participated,
}: VoteButtonsProps) {
    return (
        <div className="flex w-full items-end gap-2 mt-5">
            <div
                className="relative flex flex-col"
                style={{
                    width: `${agreeRate === 0 ? 50 : agreeRate}%`,
                    maxWidth: "60%",
                    minWidth: "40%",
                }}
            >
                {agreeRate >= disagreeRate && (
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
                        } ${participated ? "cursor-not-allowed" : ""} text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                        height: `${48 + (agreeRate - 50) * 1.2}px`,
                        minHeight: "48px",
                        maxHeight: "60px",
                    }}
                >
                    <h2>찬성</h2>
                    <p className="font-regular-12 text-gray-001">
                        {agreeRate}%({agreeCount}명)
                    </p>
                </button>
                <p className="font-semibold-13 text-blue-004 mt-2 ml-2 line-clamp-1">
                    {agree}
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
                {agreeRate <= disagreeRate && (
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
                        } ${participated ? "cursor-not-allowed" : ""} text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                    style={{
                        height: `${48 + (disagreeRate - 50) * 1.2}px`,
                        minHeight: "50px",
                        maxHeight: "60px",
                    }}
                >
                    <h2>반대</h2>
                    <p className="font-regular-12 text-gray-001">
                        {disagreeRate}%({disagreeCount}명)
                    </p>
                </button>
                <p className="font-semibold-13 text-red-004 mt-2 mr-2 ml-auto line-clamp-1">
                    {disagree}
                </p>
            </div>
        </div>
    );
}

