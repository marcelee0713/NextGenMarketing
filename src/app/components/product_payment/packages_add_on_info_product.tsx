import React, { useState } from "react";
import { formatToCurrency } from "@/utils";
import { IoIosArrowDown } from "react-icons/io";

import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import { BsStack } from "react-icons/bs";

interface props {
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  addOns: ProductAddOns[];
}

export const ProductAddOnInfo: React.FC<props> = ({
  addOns,
  productName,
  discountedPrice,
  originalPrice,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col px-4">
      <div
        className={`flex items-center justify-between bg-primary rounded-t-md p-3 text-white`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-3 bg-white text-[#0B1F65] rounded-md">
            <BsStack size={25} />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{productName}</div>
          </div>
        </div>
        <div className="flex gap-2 relative">
          <div className="flex line-through absolute text-[#DCDCDC] font-medium bottom-5 text-xs">
            PHP {formatToCurrency(originalPrice)}
          </div>
          <div className="font-bold text-lg">
            PHP {formatToCurrency(discountedPrice)}
          </div>
        </div>
      </div>
      <div className="border border-[#DCDCDC] rounded-b-md py-3 px-4">
        <div className="relative h-full w-full flex flex-col gap-4 items-start bg-[#F5F7FF] rounded-[4px] py-3 px-5">
          <button
            onClick={() => setExpand(!expand)}
            className="flex items-center justify-between w-full"
          >
            <div className="font-semibold text-sm">{"What's included"}</div>
            <IoIosArrowDown />
          </button>

          {expand && (
            <div className="absolute flex flex-col gap-4 bg-[#F5F7FF] w-full top-14 left-0 py-3 rounded-[4px] shadow-nav">
              {addOns.length !== 0 && (
                <>
                  <div className="font-semibold text-sm px-4">
                    {"Add-ons you chose"}
                  </div>

                  <ul className="font-semibold text-sm px-5 list-disc list-inside flex flex-col gap-1 items-start">
                    {addOns.map((val, index) => {
                      return (
                        <div
                          className="text-xs font-medium list-item"
                          key={index}
                        >
                          {val.header}
                          <div className="text-[#ABABAB] ml-4 text-xs flex gap-1 items-center">
                            <div>Price: PHP {formatToCurrency(val.price)}</div>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
