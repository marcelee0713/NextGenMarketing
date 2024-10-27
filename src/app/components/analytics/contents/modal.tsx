import {
  ProductQualityMonthlyAverage,
  ProductQualityUserSuggestions,
} from "@/interfaces/user/user.product.interface";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import defaultPfp from "../../../../../public/images/user (1).png";
import { getColorForRating } from "@/utils";

interface props {
  data: ProductQualityMonthlyAverage[];
  setModal: Dispatch<SetStateAction<boolean>>;
  suggestions: ProductQualityUserSuggestions[];
}

export const AverageQualityRatingModal: React.FC<props> = ({
  data,
  suggestions,
  setModal,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModal(false); // Close the modal if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="absolute inset-0 bg-opacity-80 bg-textColor w-full h-full z-30 flex items-center justify-center p-5">
      <div
        ref={dropdownRef}
        className="flex w-[1000px] max-w-full min-h-[600px] bg-white rounded-lg gap-[12px] px-5 py-5"
      >
        <div className="flex-[2] flex flex-col gap-1 text-xs">
          <div className="flex flex-col gap-[2px]">
            <div className="font-bold text-xl">{data[0].qualityName}</div>
            <div className="font-medium text-sm text-[#999999]">
              Monthly Average Rating
            </div>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis width={30} domain={[0, 5]} />
                <Tooltip />
                <Line
                  type="linear"
                  dataKey="average"
                  stroke="#3562FF"
                  activeDot={{ r: 8 }}
                  max={5}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-2 items-center justify-around">
            <div className="flex gap-2 items-center">
              <div className="h-1 w-1 rounded-full bg-[#3562FF]"></div>
              <div className="font-medium">Monthly Average Rating</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-[2px]">
            <div className="font-bold text-xl">Suggestions</div>
            <div className="font-medium text-sm text-[#999999]">
              User suggestions base on the quality
            </div>
          </div>
          <div className="h-[500px] flex flex-col gap-4 overflow-y-scroll stylish-y-scroll">
            {suggestions.map((val, index) => {
              const selectedColor = getColorForRating(val.rating);

              return (
                <>
                  <div key={index} className="flex flex-col gap-2 ">
                    <div className="flex gap-1 font-bold items-center">
                      <div className="relative h-[35px] w-[35px]">
                        <Image
                          src={defaultPfp}
                          alt="Pfp"
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-sm font-semibold">{val.name} </div>
                        <div className="flex gap-1 items-center">
                          <div className="text-[#999999] text-xs font-medium">
                            Rate:
                          </div>
                          <div
                            style={{ color: selectedColor }}
                            className=" text-sm font-sora font-extrabold"
                          >
                            {val.rating}.00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#999999] text-sm font-medium">
                      {val.suggestion}
                    </div>
                  </div>

                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
