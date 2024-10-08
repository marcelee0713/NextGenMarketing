import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SERVICES_CATEGORIES } from "@/constants/services";
import { HiSpeakerphone } from "react-icons/hi";
import { GetServicesParams } from "@/interfaces/services/data_access";

interface props {
  expandedNav: boolean;
  setExpandedNav: Dispatch<SetStateAction<boolean>>;
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

export const NavCategoriesSection = ({
  expandedNav,
  setExpandedNav,
  params,
  setParams,
}: props) => {
  const [onExpand, setOnExpand] = useState(true);

  useEffect(() => {
    if (!expandedNav) setOnExpand(false);
  }, [expandedNav]);

  return (
    <div className="flex flex-col gap-[10px] w-full no-scrollbar">
      {expandedNav && (
        <div className="font-montserrat text-textColorNavSection">
          CATEGORIES
        </div>
      )}
      <div className="flex flex-col w-full text-textColor font-inter font-medium">
        <div
          onClick={() => {
            setOnExpand(!onExpand);
            setExpandedNav(true);
          }}
          className={`flex justify-between items-center cursor-pointer hover:text-primary ${
            params.filter?.category && "text-primary"
          }`}
        >
          <div
            className={`flex gap-2 w-full p-4 items-center ${
              !expandedNav && "justify-center"
            }`}
          >
            <HiSpeakerphone size={20} />
            {expandedNav && <div className="font-medium">Ad Services</div>}
          </div>
          {expandedNav && <RiArrowDropDownLine size={40} />}
        </div>

        <div
          className={`flex gap-5 pl-6 w-full ${onExpand ? "block" : "hidden"}`}
        >
          <div className="border-l-[1px] border-solid h-auto"></div>
          <div className="flex-1 flex flex-col gap-1">
            {SERVICES_CATEGORIES.map((val, index) => {
              const selected: boolean = params.filter?.category === val;

              return (
                <div
                  onClick={() =>
                    setParams({
                      ...params,
                      filter: {
                        ...params.filter,
                        category: val,
                      },
                    })
                  }
                  key={index}
                  className={`pl-5 py-3 rounded-md cursor-pointer hover:bg-accent text-[15px] ${
                    selected ? "bg-accent" : "bg-inherit"
                  }`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
