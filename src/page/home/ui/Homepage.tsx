import React from 'react'
import HotNews from './HotNews'
import HotTopic from './HotTopic'
import Footer from '@/widgets/layout/Footer/Footer'
import Image from 'next/image'

function Homepage() {
    return (
        <>
            <div className="flex flex-col">
                <Image src="/icons/logo.svg" alt="logo" width={100} height={100} className='ml-4 mt-4' />
                <HotTopic />
                <HotNews />
            </div>
            <Footer />
        </>
    )
}

export default Homepage