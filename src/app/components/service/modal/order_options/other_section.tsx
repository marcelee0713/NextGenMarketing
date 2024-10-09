import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosInformationCircle, IoIosArrowDown } from "react-icons/io";

interface props {
  unityPrice: string;
}

export const OtherPackageSection: React.FC<props> = ({ unityPrice }) => {
  return (
    <div className="flex w-full gap-[12px]">
      <div className="flex-1 flex flex-col border border-[#DCDCDC] rounded-lg py-3 gap-3">
        <div className="flex gap-2 items-center justify-between px-4">
          <div className="font-bold text-sm text-textColor">
            How often do you need this order?
          </div>
          <FaCircleCheck className="text-primary" size={20} />
        </div>
        <hr />
        <div className="flex justify-between items-center gap-4 px-4">
          <div className="flex-1 flex justify-between items-center border-[2px] border-primary py-2 px-4 rounded-[4px] font-bold text-black relative">
            <div>69</div>
            <div className="flex items-center gap-2 text-lg">
              <div>-</div>
              <div>+</div>
            </div>
            <div className="absolute text-primary font-semibold text-xs bg-[#F5F7FF] px-1 -top-2 right-[58px]">
              Quantity
            </div>
          </div>
          <div className="flex-1 flex border border-[#DCDCDC] py-2 px-4 rounded-[4px] text-black font-bold relative">
            {unityPrice}
            <div className="absolute text-textColor font-semibold text-xs bg-[#F5F7FF] px-1 -top-2 right-[14.5px]">
              {"Unit Price (PHP)"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col border border-[#DCDCDC] rounded-lg py-3 gap-3">
        <div className="flex gap-2 items-center justify-between px-4">
          <div className="font-bold text-sm text-textColor flex items-center gap-1">
            Subscribe to save
            <IoIosInformationCircle className="text-[#B9B9B9]" size={18} />
          </div>
          <FaRegCircle className="text-[#ABABAB]" size={20} />
        </div>
        <hr />
        <div className="flex justify-between items-center gap-4 px-4">
          <div className="flex-1 flex justify-between items-center border border-[#D9D9D9] py-2 px-4 rounded-[4px] font-bold text-black relative">
            <div className="flex flex-col">
              <div className="text-xs font-semibold">3 month plan</div>
              <div className="text-[10px] font-semibold text-primary">
                SAVE $12.33 (30% off)
              </div>
            </div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};
