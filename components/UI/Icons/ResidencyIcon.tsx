const ResidencyIcon = ({ className = "", ...props }) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.0465 25.424L18.5398 8.30005L13.8198 15.9934L11.0158 11.228L2.6665 25.4227H29.0465V25.424ZM17.7972 22.7574H24.2825L18.5398 13.3987L15.3505 18.596L17.7972 22.756V22.7574ZM14.7038 22.7574H7.32917L11.0158 16.488L14.7038 22.756V22.7574Z"
        fill={props.active ? "#1A2B49" : "white"}
      />
    </svg>
  );
};

export default ResidencyIcon;
