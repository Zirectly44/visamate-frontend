import React from "react";

interface TravelIconProps {
  className?: string;
  active?: boolean;
  style?: {};
}

const JobSeekerIcon: React.FC<TravelIconProps> = ({
  className = "",
  active = false,
  style = {},
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
        d="M5 4.30005V12.3C5 14.904 6.86667 17.072 9.33333 17.54V28.3H12V17.54C13.2191 17.3071 14.3188 16.6564 15.1097 15.6999C15.9007 14.7435 16.3334 13.5412 16.3333 12.3V4.30005H13.6667V12.3C13.6669 12.8315 13.5084 13.3508 13.2114 13.7915C12.9145 14.2322 12.4926 14.5741 12 14.7734V4.30005H9.33333V14.7734C8.84071 14.5741 8.41886 14.2322 8.1219 13.7915C7.82494 13.3508 7.66641 12.8315 7.66667 12.3V4.30005H5Z"
        fill={active ? "#1A2B49" : "white"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9998 20.9667V28.3H26.6665V4.30005H23.9998C22.5853 4.30005 21.2288 4.86195 20.2286 5.86215C19.2284 6.86234 18.6665 8.21889 18.6665 9.63338V20.9667H23.9998ZM23.9998 6.96672C23.2926 6.96672 22.6143 7.24767 22.1142 7.74776C21.6141 8.24786 21.3332 8.92614 21.3332 9.63338V18.3H23.9998V6.96672Z"
        fill={active === true ? "#1A2B49" : "white"}
      />
    </svg>
  );
};

export default JobSeekerIcon;
