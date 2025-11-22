import RightArrow from '@/shared/ui/icons/RightArrow'
import React from 'react'

function RelatedNews() {
    return (
        <div className='mt-6 px-4'>
            <div className='flex flex-col gap-2 border border-blue-002 rounded-xl mt-3'>
                <div className='flex items-center gap-2 bg-white rounded-xl justify-between py-3 px-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-regular-12 text-gray-004'>머니투데이</span>
                        <span className='font-semibold-15 text-gray-006 max-w-[210px]'>일상이 된 새벽배송..
                            소비자도·택배기사도 “금지 안돼”</span>
                    </div>
                    <div className='flex items-center mt-auto gap-2'>
                        <p className='font-regular-12 text-gray-003'>바로가기</p>
                        <RightArrow className='text-gray-003' />
                    </div>
                </div>

            </div>
            <h1 className='font-semibold-16 text-gray-006 pl-2 mt-6'>관련 뉴스</h1>
            <div className='flex flex-col gap-2 text-gray-006 font-regular-12 mt-3'>
                <div className='flex items-center gap-2 bg-white rounded-xl justify-between py-3 px-4'>
                    <div className='flex items-center gap-2'>
                        <span className=''>뉴스 기사 제목입니다. 어쩌구 저쩌구...</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-regular-12 text-gray-003'>바로가기</p>
                        <RightArrow className='text-gray-003' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RelatedNews