import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { Dispatch, SetStateAction, useState } from "react";
import { GoSortDesc, GoSortAsc } from "react-icons/go";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
  dataLength: number;
}

export const SortByAndResults = ({ params, setParams, dataLength }: props) => {
  const [isDesc, setIsDesc] = useState<boolean>(true);
  const handleChange = (): boolean => {
    const val = !isDesc;
    setIsDesc(val);

    return val;
  };
  return (
    <div className="flex justify-between items-center">
      <div className="font-semibold">
        {dataLength}+ <span className="font-normal">results</span>
      </div>
      <div
        onClick={() => {
          const val = handleChange();

          setParams({
            ...params,
            sortBy: val ? "desc" : "asc",
          });
        }}
        className="flex gap-2 items-center cursor-pointer"
      >
        <div>Sort by:</div>
        <div className="flex gap-1 items-center">
          {isDesc ? (
            <GoSortDesc size={30} className="text-textColor" />
          ) : (
            <GoSortAsc size={30} className="text-textColor" />
          )}
        </div>
      </div>
    </div>
  );
};
