import React from 'react'

interface MypageIconProps {
  className?: string
  isActive?: boolean
}

export default function MypageIcon({ className, isActive = false }: MypageIconProps) {
  const pathElement = (
    <path d="M16 18C21.5228 18 26 20.2386 26 23C26 25.7614 21.5228 28 16 28C10.4772 28 6 25.7614 6 23C6 20.2386 10.4772 18 16 18ZM16 6C18.7614 6 21 8.23858 21 11C21 13.7614 18.7614 16 16 16C13.2386 16 11 13.7614 11 11C11 8.23858 13.2386 6 16 6Z" fill="currentColor" />
  )

  return (
    <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {isActive ? (
        <>
          <g filter="url(#filter0_d_83_1319)">
            {pathElement}
          </g>
          <defs>
            <filter id="filter0_d_83_1319" x="0" y="0" width="32" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.547748 0 0 0 0 0.77166 0 0 0 0 0.99359 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_1319" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_1319" result="shape" />
            </filter>
          </defs>
        </>
      ) : (
        pathElement
      )}
    </svg>
  )
}

