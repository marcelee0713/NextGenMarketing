import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";

interface props {
  sectionName: string;
  expanded: boolean;
  tabs: {
    icon: string | StaticImport;
    name: string;
  }[];
}

export const NavSection = ({ sectionName, expanded, tabs }: props) => {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      {expanded && (
        <div className="font-montserrat text-textColorNavSection">
          {sectionName}
        </div>
      )}
      <div className="flex flex-col w-full text-textColor font-inter font-medium">
        {tabs.map((val, index) => (
          <div
            key={index}
            className={`flex gap-2 w-full p-4 cursor-pointer ${
              !expanded && "justify-center"
            }`}
          >
            <Image src={val.icon} alt="Logo" width={20} height={20} />
            {expanded && <div className="font-medium">{val.name}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};