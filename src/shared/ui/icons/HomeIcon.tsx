interface HomeIconProps {
  className?: string;
  isActive?: boolean;
}

export default function HomeIcon({
  className,
  isActive = false,
}: HomeIconProps) {
  const pathElement = (
    <path
      d="M6 14.3399C6 13.0638 6.61234 11.8647 7.64731 11.1142L13.6473 6.76289C15.0499 5.74571 16.9501 5.7457 18.3527 6.76289L24.3527 11.1142C25.3877 11.8647 26 13.0638 26 14.3399V21.0113C26 23.2142 24.2091 25 22 25H10C7.79086 25 6 23.2142 6 21.0113V14.3399Z"
      fill="currentColor"
    />
  );

  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {isActive ? (
        <>
          <g filter="url(#filter0_d_83_1499)">{pathElement}</g>
          <defs>
            <filter
              id="filter0_d_83_1499"
              x="0"
              y="0"
              width="32"
              height="31"
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
                result="effect1_dropShadow_83_1499"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_83_1499"
                result="shape"
              />
            </filter>
          </defs>
        </>
      ) : (
        pathElement
      )}
    </svg>
  );
}
