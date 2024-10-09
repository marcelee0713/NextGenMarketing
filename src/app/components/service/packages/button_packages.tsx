import { Package } from "@/interfaces/services/services.interface";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface props {
  packages: Package;
  isSelected: boolean;
  onPress: () => void;
}

export const ButtonPackages: React.FC<props> = ({
  isSelected,
  onPress,
  packages,
}) => {
  return (
    <button
      onClick={onPress}
      className={`flex flex-col gap-2 ${
        isSelected
          ? "border-[2px] border-primary text-[#0B1F65]"
          : "border border-[#DCDCDC]"
      } py-2 px-3 rounded-xl`}
    >
      <div className="flex justify-between gap-2 w-full">
        <div className="flex gap-3 items-center">
          <FaCircleCheck
            className={`${
              isSelected
                ? "text-primary"
                : "text-white border border-[#ABABAB] rounded-full"
            }`}
            size={20}
          />
          <div className="self-start flex flex-col items-start">
            <div className="font-semibold">
              {packages.class.charAt(0).toUpperCase() +
                packages.class.slice(1).toLowerCase()}
            </div>
            <div className="font-medium text-xs">{packages.edge}</div>
          </div>
        </div>
        <div className="font-bold">PHP {packages.price}</div>
      </div>

      {isSelected && (
        <div className="h-full w-full flex flex-col gap-4 items-start bg-[#F5F7FF] rounded-[4px] py-3">
          <div className="font-semibold text-sm px-5">{"What's included"}</div>

          <hr className="border border-[#DCDCDC] w-full" />

          <ul className="font-semibold text-sm px-5 list-disc list-inside flex flex-col gap-1 items-start">
            {packages.includes.map((val, index) => {
              return (
                <li className="text-xs font-medium" key={index}>
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};
