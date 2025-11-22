import React from 'react'

interface CategoryIconProps {
  className?: string
  isActive?: boolean
}

export default function CategoryIcon({ className, isActive = false }: CategoryIconProps) {
  const rectElements = (
    <>
      <rect x="6" y="6" width="20" height="3" rx="1.5" fill="currentColor" />
      <rect x="6" y="12" width="20" height="3" rx="1.5" fill="currentColor" />
      <rect x="6" y="18" width="20" height="3" rx="1.5" fill="currentColor" />
    </>
  )

  return (
    <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {isActive ? (
        <>
          <g filter="url(#filter0_d_83_1249)">
            {rectElements}
          </g>
          <defs>
            <filter id="filter0_d_83_1249" x="0" y="0" width="32" height="27" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.547748 0 0 0 0 0.77166 0 0 0 0 0.99359 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_1249" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_1249" result="shape" />
            </filter>
          </defs>
        </>
      ) : (
        rectElements
      )}
    </svg>
  )
}

