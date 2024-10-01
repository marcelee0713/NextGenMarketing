import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import loudspeakerIcon from "../../../../../public/images/loudspeaker.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SERVICES_CATEGORIES } from "@/constants/services";

interface props {
  currentCategory: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

export const NavCategoriesSection = ({
  currentCategory,
  setCategory,
}: props) => {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="font-montserrat text-textColorNavSection">CATEGORIES</div>
      <div className="flex flex-col w-full text-textColor font-inter font-medium">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex gap-2 w-full p-4">
            <Image src={loudspeakerIcon} alt="Logo" width={20} height={20} />
            <div className="font-medium">Ad Services</div>
          </div>
          <RiArrowDropDownLine size={40} />
        </div>
        <div className="flex gap-5 pl-6 w-full">
          <div className="border-l-[1px] border-solid h-auto"></div>
          <div className="flex-1 flex flex-col gap-1">
            {SERVICES_CATEGORIES.map((val, index) => {
              const selected: boolean = currentCategory === val;

              return (
                <div
                  onClick={() => setCategory(val)}
                  key={index}
                  className={`pl-5 py-3 rounded-md cursor-pointer hover:bg-accent ${
                    selected ? "bg-accent" : "bg-inherit"
                  }`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
