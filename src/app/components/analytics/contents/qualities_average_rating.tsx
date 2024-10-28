import {
  ProductAnalyzedData,
  ProductQualityMonthlyAverage,
  ProductQualityUserSuggestions,
} from "@/interfaces/user/user.product.interface";
import { getColorForRating } from "@/utils";
import React, { useState } from "react";
import { AverageQualityRatingModal } from "./modal";

interface props {
  analyzedData: ProductAnalyzedData;
}

export const QualitiesAverageRating: React.FC<props> = ({ analyzedData }) => {
  const [modal, setModal] = useState(false);

  const [selectedArr, setSelectedArr] = useState<
    ProductQualityMonthlyAverage[]
  >([]);

  const [selectedSuggestions, setSelectedSuggestions] = useState<
    ProductQualityUserSuggestions[]
  >([]);

  const onClick = (index: number) => {
    const data = analyzedData.productQualityMonthlyAverage.get(index);
    const suggestions = analyzedData.userSuggestions.get(index);
    if (data && suggestions) {
      setSelectedArr(data);
      setSelectedSuggestions(suggestions);
      setModal(!modal);

      console.log(data);
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="font-bold text-xl">{"Qualities Average Rating"}</div>

      <div className="flex-1 grid grid-cols-gridTemplateQualityAverageRating gap-5 rounded-lg py-3 px-4">
        {analyzedData.marketValueRating.qualities.map((val, index) => {
          const selectedColor = getColorForRating(val.totalAverage);

          return (
            <div
              key={index}
              onClick={() => onClick(index)}
              className="flex-1 flex flex-col justify-center items-center text-center bg-white px-5 py-3 rounded-lg transition-shadow duration-500 hover:shadow-nav cursor-pointer min-h-[140px]"
            >
              <div
                style={{ color: selectedColor }}
                className={`font-sora font-extrabold text-3xl`}
              >
                {val.totalAverage}
              </div>
              <div className="text-xs font-medium">{`${val.name}`}</div>
            </div>
          );
        })}

        <div className="flex-1 flex flex-col justify-center items-center text-center px-5 py-3 rounded-lg border border-[#DCDCDC] min-h-[140px]"></div>
        <div className="flex-1 flex flex-col justify-center items-center text-center px-5 py-3 rounded-lg border border-[#DCDCDC] min-h-[140px]"></div>
      </div>
      {modal && (
        <AverageQualityRatingModal
          data={selectedArr}
          setModal={setModal}
          suggestions={selectedSuggestions}
        />
      )}
    </div>
  );
};
