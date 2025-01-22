import Image from 'next/image';

const SubHeader = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="card bg-card !px-5 !py-1 gap-2 sm:gap-5 flex items-center justify-center !rounded-full border ">
        <div className="-ml-[11px] sm:-mr-3 h-6 w-6 rounded-full flex items-center justify-center">
          <Image 
            src="/images/illustrations/sub-header-green-ball.svg" 
            alt="Sub Header Icon" 
            width={24} 
            height={24} 
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center pr-1 ">
              <p className='text-foreground italic text-sm'>+36 000 </p>
          </div>
          <p className="text-foreground text-sm italic font-normal">offres actuellement disponibles</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
