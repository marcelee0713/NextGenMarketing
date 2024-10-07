import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

interface props {
  category?: string;
}

export const Header = ({ category }: props) => {
  return (
    <div className="flex flex-col ">
      <div className="text-2xl font-semibold text-black">{category}</div>
      <div className="flex gap-2">
        <div>
          Stand out from the crowd with a tiktok ad that fits your brand
          personality.
        </div>
        <div className="border-l-[1px] border-[#ABABAB]"></div>
        <div className="flex gap-1 items-center">
          <IoIosPlayCircle size={20} />
          <div className="font-medium">How NextGen works</div>
        </div>
      </div>
    </div>
  );
};
