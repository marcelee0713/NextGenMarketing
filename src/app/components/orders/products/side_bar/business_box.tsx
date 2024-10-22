import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { MdMessage } from "react-icons/md";

interface props {
  productBanner: StaticImageData | string;
  businessName: string;
}

export const BusinessBox: React.FC<props> = ({
  productBanner,
  businessName,
}) => {
  return (
    <div className="flex w-full font-bold text-sm px-4 py-4 items-center">
      <div className="flex justify-between border border-[#DCDCDC] w-full h-[60px] rounded-md px-3 py-2">
        <div className="flex-1 flex gap-2 items-center">
          <div className="relative h-[40px] w-[40px] rounded-full">
            <Image
              alt="an image"
              src={productBanner}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{businessName}</div>
            <div className="flex gap-1 items-center">
              <div className="h-1 w-1 rounded-full bg-green-400"></div>
              <div className="font-medium text-xs text-[#999999]">Online</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {}}
          className="bg-primary p-2 px-3 rounded-md h-full flex items-center justify-center"
        >
          <MdMessage className="text-white" size={25} />
        </button>
      </div>
    </div>
  );
};
