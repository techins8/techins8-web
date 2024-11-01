const SubHeader = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="card font-medium text-text-primary !px-4 !py-1 gap-2 sm:gap-5 flex items-center justify-center !rounded-full border ">
        <div className="-ml-[11px] sm:-mr-3 h-6 w-6 rounded-full flex items-center justify-center bg-stone-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star h-4 w-4 text-white animate-spin-grow"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="flex items-center">
          <div className="w-[27px] flex items-center">
            <div>
              <span>550</span>
            </div>
          </div>
          +&nbsp;
          <span className="text-secondary font-normal">utilisateurs</span>
        </div>
        <div className="hidden sm:flex">
          <div className="w-[18px] flex items-center">
            <div>
              <span>40</span>
            </div>
          </div>
          k+&nbsp;
          <span className="text-secondary font-normal">annonces</span>
        </div>
        <div className="flex">
          <div className="w-[9px] flex items-center">
            <div>
              <span>5</span>
            </div>
          </div>
          /5&nbsp;
          <span className="text-secondary font-normal">customer rating</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
