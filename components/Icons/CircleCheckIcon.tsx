import React from "react";

interface CircleCheckIconProps {
  style?: {};
}

const CircleCheckIcon: React.FC<CircleCheckIconProps> = ({
  style = {},
}) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M7 14.5C3.1339 14.5 0 11.3661 0 7.5C0 3.6339 3.1339 0.5 7 0.5C10.8661 0.5 14 3.6339 14 7.5C14 11.3661 10.8661 14.5 7 14.5ZM6.3021 10.3L11.2511 5.3503L10.2613 4.3605L6.3021 8.3204L4.3218 6.3401L3.332 7.3299L6.3021 10.3Z"
        fill="#63F469"
      />
    </svg>
  );
};

export default CircleCheckIcon;
