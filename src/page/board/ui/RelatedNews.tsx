import RightArrow from '@/shared/ui/icons/RightArrow'
import React from 'react'
import { getBoardDetail } from '../api/boardDetail';
import Link from 'next/link';
import { NewsResponse } from '../types/board';

async function RelatedNews({ postPk }: { postPk: number }) {
    const boardDetail = await getBoardDetail(postPk);
    if (!boardDetail) {
        return <div>게시글을 불러오는 중 오류가 발생했습니다.</div>;
    }
    const { news } = boardDetail.result;

    return (
        <div className='mt-6 px-4'>
            <h1 className='font-semibold-16 text-gray-006 pl-2'>관련 뉴스</h1>
            {news && news.length > 0 ? (
                <div className='flex flex-col gap-2 mt-3'>
                    {news.map((newsItem: NewsResponse) => (
                        <Link
                            key={newsItem.newsPk}
                            href={newsItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 bg-white rounded-xl justify-between py-3 px-4 hover:bg-gray-001 transition-colors'
                        >
                            <div className='flex items-center gap-2 flex-1 min-w-0'>
                                <span className='font-regular-14 text-gray-006 truncate'>{newsItem.title}</span>
                            </div>
                            <div className='flex items-center gap-2 shrink-0'>
                                <p className='font-regular-12 text-gray-003'>바로가기</p>
                                <RightArrow className='text-gray-003' />
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center py-8 mt-3'>
                    <p className='font-regular-14 text-gray-004'>관련 뉴스가 없습니다</p>
                </div>
            )}
        </div>
    )
}

export default RelatedNews