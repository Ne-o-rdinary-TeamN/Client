import React from 'react'
import { Http } from '@/shared/api/http'
import { ENDPOINT } from '@/shared/config/endpoint'
import type { BoardPostResponse } from '@/features/board/types/board'
import { notFound } from 'next/navigation'
import { BoardPage } from '@/page/board'

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export default async function Page({ params }: PageProps) {
    const { id } = await params

    return (
        <>
            <BoardPage />
        </>
    )
}