import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface props {
  intentions: string;
  addOns: ProductAddOns[];
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const ProductSideInfo: React.FC<props> = ({
  addOns,
  intentions,
  setModal,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="h-auto flex flex-col gap-[10px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="flex flex-col">
        <div className="font-bold">Intention</div>

        <div className="font-medium text-sm">{intentions}</div>
      </div>

      <div className="h-full w-full flex flex-col gap-4 items-start bg-[#F5F7FF] rounded-[4px] py-3">
        <button
          onClick={() => setExpand(!expand)}
          className="flex items-center justify-between w-full px-5 "
        >
          <div className="font-semibold text-sm">{"Available Add-ons"}</div>
          <IoIosArrowDown />
        </button>

        {expand && (
          <>
            <hr className="border border-[#DCDCDC] w-full" />

            <ul className="font-semibold text-sm px-5 list-disc list-inside flex flex-col gap-1 items-start">
              {addOns.map((val, index) => {
                return (
                  <li className="text-xs font-medium" key={index}>
                    {val.header}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>

      <button
        onClick={() => {
          setModal && setModal(true);
        }}
        className="flex gap-2 bg-primary text-white rounded-lg py-4 items-center justify-center relative"
      >
        <div>Proceed</div>
        <FaArrowRightLong className="absolute right-10" />
      </button>
    </div>
  );
};
