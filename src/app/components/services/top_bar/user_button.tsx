import React from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import defaultUserIcon from "../../../../../public/images/user (1).png";

export const UserButton = () => {
  return (
    <div className="flex gap-3 items-center justify-between h-[50px] border border-[#CFCFCF] p-2 rounded-3xl cursor-pointer">
      <div className="flex gap-3 items-center">
        <Image src={defaultUserIcon} alt="pfp" width={35} height={35} />
        <div className="text-sm font-semibold text-textColor">John Doe</div>
      </div>

      <RiArrowDropDownLine size={30} className="text-textColor" />
    </div>
  );
};
