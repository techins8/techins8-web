import Image from 'next/image';

const SubHeader = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="card font-medium text-text-primary !px-4 !py-1 gap-2 sm:gap-5 flex items-center justify-center !rounded-full border ">
        <div className="-ml-[11px] sm:-mr-3 h-6 w-6 rounded-full flex items-center justify-center bg-stone-900">
          <Image 
            src="/images/icons/sub-header-icon.svg" 
            alt="Sub Header Icon" 
            width={24} 
            height={24} 
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center pr-1">
              <p>+1000 </p>
          </div>
          <p className="text-secondary font-normal">Développeurs Inscrits</p>
        </div>
        <div className="hidden sm:flex">
          <div className="flex items-center pr-1">
              <span>+50K</span>
          </div>
          <span className="text-secondary font-normal">Annonces</span>
        </div>
        <div className="hidden sm:flex">
          <div className="flex items-center pr-1">
              <span>+900</span>
          </div>
          <span className="text-secondary font-normal">Inscrits à la Newsletter</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
