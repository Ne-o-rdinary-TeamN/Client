'use client'
import RightArrow from '@/shared/ui/icons/RightArrow'
import React from 'react'

function HotNews() {
    return (
        <div className='mt-6 px-4'>
            <h1 className='font-semibold-18 text-gray-006 pl-2'>실시간 핫뉴스</h1>
            <div className='flex flex-col gap-2 text-gray-006 font-regular-12 mt-3'>
                <div className='flex items-center gap-2 bg-white rounded-xl justify-between py-2.5 px-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-006 font-medium-14'>1</span>
                        <span className=''>뉴스 기사 제목입니다. 어쩌구 저쩌구...</span>
                    </div>
                    <RightArrow className='text-gray-006' />
                </div>
                <div className='flex items-center gap-2 bg-white rounded-xl justify-between py-2 px-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-006 font-medium-14'>1</span>
                        <span className=''>뉴스 기사 제목입니다. 어쩌구 저쩌구...</span>
                    </div>
                    <RightArrow className='text-gray-006' />
                </div>
                <div className='flex items-center gap-2 bg-white rounded-xl justify-between py-2 px-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-006 font-medium-14'>1</span>
                        <span className=''>뉴스 기사 제목입니다. 어쩌구 저쩌구...</span>
                    </div>
                    <RightArrow className='text-gray-006' />
                </div>
            </div>
        </div>
    )
}

export default HotNews