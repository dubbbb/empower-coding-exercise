interface ComponentProps {}

const Header: React.FC<ComponentProps> = () => {
  return (
    <div className="bg-sky-950 flex items-center gap-2 p-4">
      <svg
        fill="none"
        width="31"
        height="24"
        viewBox="0 0 31 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.407 6.72838C27.7508 6.06942 26.8604 5.69916 25.9318 5.69916C25.0033 5.69916 24.1129 6.06942 23.4566 6.72838L21.8666 8.32336L15.0767 1.52132C13.0514 -0.507106 9.77109 -0.507106 7.74577 1.52132L18.1816 11.9988L7.73676 22.4762C8.70865 23.4518 10.0272 24 11.4022 24C12.7772 24 14.0958 23.4518 15.0677 22.4762L26.8741 10.657C27.89 9.59666 29.318 9.03583 30.7816 9.12236L28.407 6.72838Z"
          fill="white"
        />
        <path
          d="M14.5837 12.0078L7.33094 4.73539C6.35905 3.75975 5.04045 3.21158 3.66548 3.21158C2.2905 3.21158 0.971894 3.75975 0 4.73539L7.24077 11.9987L0 19.2621C0.971894 20.2377 2.2905 20.7859 3.66548 20.7859C5.04045 20.7859 6.35905 20.2377 7.33094 19.2621L14.5837 12.0078Z"
          fill="white"
        />
      </svg>

      <span className="text-white font-semibold">SPEND TRACKER</span>
      <span className="text-sky-200 font-medium">
        ON TRACK with YOUR MONEY.
      </span>
    </div>
  );
};

export default Header;
