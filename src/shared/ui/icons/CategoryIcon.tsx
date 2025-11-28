interface CategoryIconProps {
  className?: string;
  isActive?: boolean;
}

export default function CategoryIcon({
  className,
  isActive = false,
}: CategoryIconProps) {
  const pathElements = (
    <>
      <path
        d="M6 16.7563C6 15.6518 6.89543 14.7563 8 14.7563H24C25.1046 14.7563 26 15.6518 26 16.7563V24.7563C26 25.8609 25.1046 26.7563 24 26.7563H8C6.89543 26.7563 6 25.8609 6 24.7563V16.7563Z"
        fill="currentColor"
      />
      <path
        d="M12.1743 12.7565C11.3199 12.7565 10.859 11.7543 11.415 11.1057L15.492 6.34926C15.7906 6.00086 16.288 5.90041 16.6984 6.10562L21.4473 8.48006C21.7861 8.64945 22.0001 8.99571 22.0001 9.37448V11.7565C22.0001 12.3087 21.5524 12.7565 21.0001 12.7565H12.1743Z"
        fill="currentColor"
      />
    </>
  );

  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {isActive ? (
        <>
          <g filter="url(#filter0_d_83_3671)">{pathElements}</g>
          <defs>
            <filter
              id="filter0_d_83_3671"
              x="0"
              y="0"
              width="32"
              height="32.7563"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.547748 0 0 0 0 0.77166 0 0 0 0 0.99359 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_83_3671"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_83_3671"
                result="shape"
              />
            </filter>
          </defs>
        </>
      ) : (
        pathElements
      )}
    </svg>
  );
}
