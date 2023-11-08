const ShieldCheckIcon = ({ className = "", ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24.375 4.6875H5.625C5.12772 4.6875 4.65081 4.88504 4.29917 5.23667C3.94754 5.58831 3.75 6.06522 3.75 6.5625V13.4508C3.75 23.952 12.6352 27.4359 14.4141 28.0277C14.794 28.1569 15.206 28.1569 15.5859 28.0277C17.3672 27.4359 26.25 23.952 26.25 13.4508V6.5625C26.25 6.06522 26.0525 5.58831 25.7008 5.23667C25.3492 4.88504 24.8723 4.6875 24.375 4.6875ZM24.375 13.452C24.375 22.6418 16.5996 25.7121 15 26.2465C13.4145 25.718 5.625 22.65 5.625 13.452V6.5625H24.375V13.452ZM9.64922 16.6008C9.47331 16.4249 9.37448 16.1863 9.37448 15.9375C9.37448 15.6887 9.47331 15.4501 9.64922 15.2742C9.82513 15.0983 10.0637 14.9995 10.3125 14.9995C10.5613 14.9995 10.7999 15.0983 10.9758 15.2742L13.125 17.4234L19.0242 11.5242C19.1113 11.4371 19.2147 11.368 19.3285 11.3209C19.4423 11.2737 19.5643 11.2495 19.6875 11.2495C19.8107 11.2495 19.9327 11.2737 20.0465 11.3209C20.1603 11.368 20.2637 11.4371 20.3508 11.5242C20.4379 11.6113 20.507 11.7147 20.5541 11.8285C20.6013 11.9423 20.6255 12.0643 20.6255 12.1875C20.6255 12.3107 20.6013 12.4327 20.5541 12.5465C20.507 12.6603 20.4379 12.7637 20.3508 12.8508L13.7883 19.4133C13.7012 19.5004 13.5978 19.5696 13.484 19.6168C13.3702 19.664 13.2482 19.6882 13.125 19.6882C13.0018 19.6882 12.8798 19.664 12.766 19.6168C12.6522 19.5696 12.5488 19.5004 12.4617 19.4133L9.64922 16.6008Z"
        fill="white"
      />
    </svg>
  );
};

export default ShieldCheckIcon;
