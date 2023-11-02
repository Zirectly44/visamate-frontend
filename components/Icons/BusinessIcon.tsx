import React from "react";

interface TravelIconProps {
  className?: string;
  active?: boolean;
  style?: {};
}

const BusinessIcon: React.FC<TravelIconProps> = ({
  className = "",
  active = false,
  style = {}
}) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6665 6.96672H7.33317V9.70005H4.6665V4.30005H27.3332V9.70005H24.6665V6.96672H22.3332V9.70005H19.6665V6.96672H17.3332V9.70005H14.6665V6.96672H12.3332V9.70005H9.6665V6.96672ZM2.6665 11.0334H29.3332V13.7H27.3332V28.3H18.6665V20.3C18.6665 18.8334 17.4665 17.6334 15.9998 17.6334C14.5332 17.6334 13.3332 18.8334 13.3332 20.3V28.3H4.6665V13.7H2.6665V11.0334ZM21.3332 25.6334H24.6665V13.7H7.33317V25.6334H10.6665V20.3C10.6665 17.3534 13.0532 14.9667 15.9998 14.9667C18.9465 14.9667 21.3332 17.3534 21.3332 20.3V25.6334Z"
        fill={active === true ? "#1A2B49" : "white"}
      />
    </svg>
  );
};

export default BusinessIcon;
