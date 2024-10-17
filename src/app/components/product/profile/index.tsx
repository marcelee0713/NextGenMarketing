import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { formatToCurrency } from "@/utils";

interface props {
  banner: string | StaticImageData;
  productName: string;
  businessName: string;
  overallRating: number;
  soldCount: number;
  price: number;
  discount: number;
}

export const ProductProfileDetails: React.FC<props> = ({
  banner,
  overallRating,
  soldCount,
  productName,
  businessName,
  discount,
  price,
}) => {
  const discounted = price * discount;
  const discountedPrice = price - discounted;

  return (
    <div className="flex flex-col h-[370px]">
      <div className="relative flex-1">
        <Image
          src={banner}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
        />

        <button className="flex gap-2 items-center justify-center px-3 py-2 bg-white bg-opacity-70 absolute text-textColor font-semibold rounded-[4px] text-sm right-2 top-2">
          Get to know me
          <GoArrowUpRight />
        </button>
      </div>
      <div className="flex bg-white rounded-b-md items-center relative h-[120px]">
        <div className="flex justify-between w-full h-full py-3 px-5 items-start">
          <div className="flex w-full flex-col text-textColor gap-[6px]">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col">
                <div className="font-extrabold text-2xl">{productName}</div>
                <div className="font-medium text-sm">{businessName}</div>
              </div>

              <div className="flex gap-2 relative">
                <div className="flex line-through absolute text-[#999999] font-medium bottom-5 text-xs">
                  PHP {formatToCurrency(price)}
                </div>
                <div className="font-bold text-lg">
                  PHP {formatToCurrency(discountedPrice)}
                </div>
              </div>
            </div>

            <div className="text-sm flex gap-2 items-center">
              <IoStar size={20} />
              <div className="flex font-bold items-center gap-1">
                {overallRating} <span className="font-light">{"(158)"}</span>
              </div>
              |<div className="text-[#999999]">Sold count: {soldCount} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
