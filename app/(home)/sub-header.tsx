"use client";

import { getCountJobs } from "@/query/count-jobs.query";
import Image from "next/image";
import { useEffect, useState } from "react";

const SubHeader = () => {
  const [count, setCount] = useState<number | null>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("countJobs");
      return stored ? parseInt(stored) : null;
    }
    return null;
  });

  useEffect(() => {
    const fetchCount = async () => {
      const data = await getCountJobs();
      const roundedCount = Math.round(data.total_count / 100 - 1) * 100;
      setCount(roundedCount);
      sessionStorage.setItem("countJobs", roundedCount.toString());
    };
    fetchCount();
  }, []);

  return (
    <>
      {count !== null && (
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
                <p className="text-foreground italic text-sm">+ {count}</p>
              </div>
              <p className="text-foreground text-sm italic font-normal">
                offres actuellement analysées
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubHeader;
