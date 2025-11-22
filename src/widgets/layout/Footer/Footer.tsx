'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HomeIcon from '@/shared/ui/icons/HomeIcon'
import CategoryIcon from '@/shared/ui/icons/CategoryIcon'
import MypageIcon from '@/shared/ui/icons/MypageIcon'

function Footer() {
    const pathname = usePathname()

    const isHomeActive = pathname === '/'
    const isCategoryActive = pathname === '/category'
    const isMypageActive = pathname === '/mypage'

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl">
            <div className="flex h-16 justify-around items-center">
                <Link href="/" className={`${isHomeActive ? 'text-blue-004' : 'text-gray-003'} flex flex-col items-center`}>
                    <HomeIcon isActive={isHomeActive} />
                    <span className="regular-12">홈</span>
                </Link>
                <Link href="/category" className={`${isCategoryActive ? 'text-blue-004' : 'text-gray-003'} flex flex-col items-center`}>
                    <CategoryIcon isActive={isCategoryActive} />
                    <span className="regular-12">카테고리</span>
                </Link>
                <Link href="/mypage" className={`${isMypageActive ? 'text-blue-004' : 'text-gray-003'} flex flex-col items-center`}>
                    <MypageIcon isActive={isMypageActive} />
                    <span className="regular-12">마이페이지</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer