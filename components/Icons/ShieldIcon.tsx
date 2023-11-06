const ShieldIcon = ({ className = "", ...props }) => {
  return (
    <svg
      width="25"
      height="30"
      viewBox="0 0 25 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g filter="url(#filter0_d_3_607)">
        <path
          d="M12.4998 2L4.49976 5V11.09C4.49976 16.14 7.90976 20.85 12.4998 22C17.0898 20.85 20.4998 16.14 20.4998 11.09V5L12.4998 2ZM18.4998 11.09C18.4998 15.09 15.9498 18.79 12.4998 19.92C9.04976 18.79 6.49976 15.1 6.49976 11.09V6.39L12.4998 4.14L18.4998 6.39V11.09Z"
          fill="#232B3E"
        />
        <path
          d="M12.5002 8L13.3983 10.7639H16.3045L13.9533 12.4721L14.8514 15.2361L12.5002 13.5279L10.1491 15.2361L11.0472 12.4721L8.69602 10.7639H11.6022L12.5002 8Z"
          fill="#232B3E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3_607"
          x="-3.5"
          y="0"
          width="32"
          height="32"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3_607"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShieldIcon;
