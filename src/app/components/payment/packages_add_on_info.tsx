import React, { useState } from "react";
import { PackageIndicator } from "../service/modal/order_options/package_indicator";
import { formatToCurrency } from "@/utils";
import { IoIosArrowDown } from "react-icons/io";
import {
  Package,
  ServiceAddOns,
} from "@/interfaces/services/services.interface";

interface props {
  currentPackage: Package;
  addOns: ServiceAddOns[];
}

export const PackagesAddOnInfo: React.FC<props> = ({
  addOns,
  currentPackage,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col px-4">
      <PackageIndicator
        currentClass={
          currentPackage.class.charAt(0).toUpperCase() +
          currentPackage.class.slice(1).toLowerCase()
        }
        edge={currentPackage.edge}
        price={formatToCurrency(currentPackage.price)}
        idkMan
      />
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
              <ul className="font-semibold text-sm px-5 list-disc list-inside flex flex-col gap-1 items-start">
                {currentPackage.includes.map((val, index) => {
                  return (
                    <li className="text-xs font-medium" key={index}>
                      {val}
                    </li>
                  );
                })}
              </ul>

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
                            <div className="bg-[#ABABAB] h-1 w-1 rounded-full"></div>
                            <div>{`Days added: ${val.durationTime}`}</div>
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
