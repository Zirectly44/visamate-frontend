import React from "react";

interface TravelIconProps {
  className?: string;
  active?: boolean;
}

const MagnifyingGlassIcon: React.FC<TravelIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1349 16.135C13.5742 17.4409 11.5746 18.103 9.54293 17.9865C7.51131 17.87 5.60044 16.9837 4.19931 15.5079C2.79818 14.0321 2.0121 12.0779 2.00109 10.0429C1.99008 8.00799 2.75497 6.04535 4.14005 4.5545C5.52514 3.06366 7.4263 2.15668 9.45654 2.01819C11.4868 1.87971 13.4935 2.52012 15.0682 3.80907C16.6429 5.09802 17.6672 6.93862 17.9326 8.9562C18.1981 10.9738 17.6846 13.0167 16.4969 14.669L22.4139 20.586L20.9999 22L15.1349 16.135ZM15.9999 10C15.9999 11.5913 15.3677 13.1175 14.2425 14.2427C13.1173 15.3679 11.5912 16 9.99988 16C8.40858 16 6.88246 15.3679 5.75724 14.2427C4.63202 13.1175 3.99988 11.5913 3.99988 10C3.99988 8.40874 4.63202 6.88261 5.75724 5.7574C6.88246 4.63218 8.40858 4.00004 9.99988 4.00004C11.5912 4.00004 13.1173 4.63218 14.2425 5.7574C15.3677 6.88261 15.9999 8.40874 15.9999 10Z"
        fill="#1A2B49"
      />
    </svg>
  );
};

export default MagnifyingGlassIcon;
