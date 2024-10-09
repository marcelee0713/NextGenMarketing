import { formatToCurrency } from "@/utils";
import React, { Dispatch, SetStateAction } from "react";

interface props {
  index: string;
  header: string;
  description: string;
  price: number;
  durationTime: number;
  receipt: Map<string, number>;
  setReceipt: Dispatch<SetStateAction<Map<string, number>>>;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const AddOnItem: React.FC<props> = ({
  description,
  durationTime,
  header,
  price,
  receipt,
  setReceipt,
  setChecked,
  index,
}) => {
  const selected = receipt.has(index);

  return (
    <button
      onClick={() => {
        if (!receipt.has(index)) {
          const newMap = new Map(receipt).set(index, price);

          setReceipt(newMap);

          setChecked(newMap.size > 1);
        } else {
          const newMap = new Map(receipt);

          newMap.delete(index);

          setReceipt(newMap);

          setChecked(newMap.size > 1);
        }
      }}
      className={`flex flex-col gap-[5px] py-2  px-4 rounded-[4px] text-textColor ${
        selected
          ? "border-[2px] border-primary bg-[#DCE4FF]"
          : "border border-[#DCDCDC]"
      }`}
    >
      <div className="text-sm font-semibold">{header}</div>
      <div className="text-xs font-medium">{description}</div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold">
          {`PHP ${formatToCurrency(price)}`}
        </div>
        <div className="h-1 w-1 rounded-full bg-textColor"></div>
        <div className="text-xs">Additional day: {durationTime}</div>
      </div>
    </button>
  );
};
