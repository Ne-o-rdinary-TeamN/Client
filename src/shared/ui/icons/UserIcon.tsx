import React from 'react'

interface UserIconProps {
    className?: string
}

export default function UserIcon({ className }: UserIconProps) {
    return (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5.90918 7.09082C9.17268 7.09082 11.8184 8.41415 11.8184 10.0459C11.8179 11.6775 9.17242 13 5.90918 13C2.64596 13 0.000417267 11.6775 0 10.0459C0 8.41416 2.64571 7.09084 5.90918 7.09082ZM5.90918 0C7.54075 4.16143e-05 8.86304 1.32258 8.86328 2.9541C8.86328 4.58583 7.54089 5.90914 5.90918 5.90918C4.27743 5.90918 2.9541 4.58585 2.9541 2.9541C2.95434 1.32256 4.27758 0 5.90918 0Z" fill="currentColor" />
        </svg>

    )
}