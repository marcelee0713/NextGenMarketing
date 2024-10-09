import React from "react";
import { BsStack } from "react-icons/bs";

interface props {
  price: string;
  currentClass: string;
  edge: string;
}

export const PackageIndicator: React.FC<props> = ({
  currentClass,
  edge,
  price,
}) => {
  return (
    <div className="flex items-center justify-between bg-primary rounded-md p-3 text-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center p-3 bg-white text-[#0B1F65] rounded-md">
          <BsStack size={25} />
        </div>
        <div className="flex flex-col">
          <div className="font-bold">{`${currentClass} Package`}</div>
          <div className="font-medium text-xs">{edge}</div>
        </div>
      </div>
      <div className="font-bold">{`PHP ${price}`}</div>
    </div>
  );
};
