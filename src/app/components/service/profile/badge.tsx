import { BadgeType } from "@/types/partner/partner.types";
import React from "react";
import { FaCoins } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

interface props {
  type: BadgeType;
}

export const Badge: React.FC<props> = ({ type }) => {
  if (type === "BUDGET PICK") {
    return (
      <div className="font-bold text-sm flex gap-2 items-center py-[2px] px-3 bg-[#FFD73B] text-black h-fit rounded-[4px]">
        Budget Pick
        <FaCoins />
      </div>
    );
  }

  if (type === "CUSTOMER'S CHOICE") {
    return (
      <div className="py-1 px-4 bg-[#0B1F65] rounded-[4px] text-white h-fit">
        Next<span className="text-primary font-extrabold">Gen</span>
        <span className="font-semibold">Choice</span>
      </div>
    );
  }

  if (type === "TOP RATED") {
    return (
      <div className="font-bold text-sm flex gap-2 items-center py-[2px] px-3 bg-[#FFE0B3] text-black h-fit rounded-[4px]">
        Top Rated
        <div className="flex items-center gap-2">
          <FaDiamond />
          <FaDiamond />
          <FaDiamond />
        </div>
      </div>
    );
  }

  if (type === "TRUSTED") {
    return (
      <div className="font-bold text-sm flex gap-2 items-center py-[2px] px-3 bg-[#AAD6A0] text-black h-fit rounded-[4px]">
        Trusted
        <VscWorkspaceTrusted />
      </div>
    );
  }

  return <div>badge</div>;
};
