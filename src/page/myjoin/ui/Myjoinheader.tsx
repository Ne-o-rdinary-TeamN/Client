"use client";
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function Myjoinheader() {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    return (
        <header className="w-full flex items-center justify-center h-[72px] relative">
            <button
                className="absolute left-0 top-[50%] translate-y-[-50%]"
                onClick={handleBack}
            >
                <ChevronLeft size={24} className="text-blue-004" />
            </button>
            <span className="text-blue-004 font-medium-15">내가 참여한 토론</span>
        </header>
    )
}

export default Myjoinheader