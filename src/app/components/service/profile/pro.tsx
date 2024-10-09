import React from "react";
import { MdVerified } from "react-icons/md";

export const ProTag = () => {
  return (
    <div className="font-bold text-sm flex gap-2 items-center py-[2px] px-3 bg-primary text-white h-fit rounded-[4px]">
      <MdVerified />
      Pro
    </div>
  );
};
