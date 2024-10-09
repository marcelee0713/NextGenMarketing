import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

interface props {
  tags: string[];
  overview: string;
}

export const ServiceOverview: React.FC<props> = ({ overview, tags }) => {
  return (
    <div className="min-h-[145px] flex flex-col gap-[10px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="font-bold">Overview</div>
      <div className="font-medium">{overview}</div>
      <div className="flex gap-[10px]">
        {tags.map((val, index) => {
          return (
            <div
              key={index}
              className="flex px-4 py-2 gap-2 border border-[#DCDCDC] rounded-md"
            >
              <RiVerifiedBadgeFill className="text-primary" size={15} />
              <div className="font-medium text-xs">{val}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
