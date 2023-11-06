import React from "react";

interface ChevronDownIconProps {
  className?: string;
  style?: {};
  fill?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  className = "",
  style = {},
  fill = "white"
}) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44998 10.9741L14.5635 6.2018L15.5865 7.2983L9.44998 13.0261L3.31348 7.29755L4.33648 6.20105L9.44998 10.9741Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronDownIcon;
