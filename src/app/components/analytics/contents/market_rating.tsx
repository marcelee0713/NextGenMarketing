import { ProductAnalyzedData } from "@/interfaces/user/user.product.interface";
import { getColorForRating } from "@/utils";
import React from "react";

interface props {
  analyzedData: ProductAnalyzedData;
}

export const MarketRating: React.FC<props> = ({ analyzedData }) => {
  const color = getColorForRating(analyzedData.marketValueRating.average);

  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="font-bold text-xl">Market Value Rating</div>
      <div className="flex-[2] flex flex-col items-center justify-center text-center gap-2">
        <div className="flex flex-col text-center items-center justify-center">
          <div
            style={{ color: color }}
            className={`font-sora font-extrabold text-7xl`}
          >
            {analyzedData.marketValueRating.average}
          </div>
          <div className="text-xl font-bold">Average Rating</div>
          <div className="text-xs font-medium text-[#999999]">
            {"Combined Rating from Product's Qualities"}
          </div>
        </div>
      </div>
    </div>
  );
};
