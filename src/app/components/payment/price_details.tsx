import { formatToCurrency } from "@/utils";
import React from "react";

interface props {
  receipt: Map<string, number>;
  totalAmount: number;
}

export const PriceDetails: React.FC<props> = ({ receipt, totalAmount }) => {
  return (
    <div className="flex flex-col rounded-lg py-3 px-4 mx-4 gap-[20px] text-xs">
      <hr />

      <div className="flex flex-col gap-2 text-sm">
        {Array.from(receipt.entries()).map((val) => {
          if (val[0] === "Discount") {
            return (
              <div
                key={val[0]}
                className="w-full flex items-center justify-between gap-2"
              >
                <div className="font-semibold text-[#999999]">{val[0]}</div>
                <div className="font-semibold text-textColor">
                  {val[1] * 100}%
                </div>
              </div>
            );
          }

          return (
            <div
              key={val[0]}
              className="w-full flex items-center justify-between gap-2"
            >
              <div className="font-semibold text-[#999999]">{val[0]}</div>
              <div className="font-semibold text-textColor">
                PHP {formatToCurrency(val[1])}
              </div>
            </div>
          );
        })}

        <div className="w-full flex items-center justify-between gap-2">
          <div className="font-semibold text-[#999999]">Total</div>
          <div className="font-semibold text-textColor">
            PHP {formatToCurrency(totalAmount)}
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};
