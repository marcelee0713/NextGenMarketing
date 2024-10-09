import React from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";

interface props {
  username: string;
}

export const ServiceAMA: React.FC<props> = ({ username }) => {
  return (
    <div className="min-h-[105px] flex flex-col gap-[10px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="flex items-center gap-1">
        <div className="font-bold">Ask me About</div>
        <IoIosInformationCircle size={20} className="text-[#B9B9B9]" />
      </div>

      <div className="flex gap-5 items-center w-full">
        <div className="flex-1 flex gap-2 items-center">
          <FaSquareCheck className="text-primary" size={25} />
          <div className="flex-1 flex justify-between items-center bg-[#F5F7FF] py-2 px-3 rounded-md">
            <div className="font-semibold text-sm text-[#666666]">
              A Very Long Message Here
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
              <div className="font-semibold text-xs">42</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-2 items-center">
          <CiSquarePlus className="text-primary" size={25} />
          <div className="flex-1 flex justify-between items-center bg-[#F5F7FF] py-2 px-3 rounded-md">
            <div className="font-semibold text-sm text-[#666666]">
              Ask {`${username}`} Anything
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
              <div className="font-semibold text-xs">42</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
