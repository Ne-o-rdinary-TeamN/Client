import { Button } from '@/shared/ui'
import UserIcon from '@/shared/ui/icons/UserIcon'
import Image from 'next/image'
import React from 'react'
import Myjoinheader from './Myjoinheader'

function Myjoin() {
    const dummyVoteData = {
        approvePercent: 50,
        oppositePercent: 50,
        approveCount: 100,
        oppositeCount: 100,
    }
    return (
        <div className='px-4'>
            <Myjoinheader />
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
                                className={`${dummyVoteData.approvePercent >=
                                    dummyVoteData.oppositePercent
                                    ? "bg-blue-003"
                                    : "bg-blue-001"
                                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                                style={{
                                    height: `${48 + (dummyVoteData.approvePercent - 50) * 1.2
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
                                className={`${dummyVoteData.approvePercent <=
                                    dummyVoteData.oppositePercent
                                    ? "bg-red-003"
                                    : "bg-red-001"
                                    } text-white rounded-2xl py-2 px-4 w-full font-semibold-14 relative flex flex-col justify-center`}
                                style={{
                                    height: `${48 + (dummyVoteData.oppositePercent - 50) * 1.2
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
    )
}

export default Myjoin