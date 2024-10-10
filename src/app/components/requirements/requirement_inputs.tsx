import React from "react";
import { IoIosInformationCircle, IoIosArrowDown } from "react-icons/io";

export const RequirementInputs = () => {
  return (
    <>
      <div className="flex items-center py-2 px-5 gap-2 h-[50px] bg-[#DCE4FF] text-primary mx-4 rounded-[4px]">
        <IoIosInformationCircle size={25} />
        <div className="text-sm font-semibold">
          Your data will be kept secure and used only to enhance your
          experience.
        </div>
      </div>
      <div className="h-full flex flex-col rounded-lg py-3 px-4  gap-[25px] text-xs">
        <hr />

        <div className="relative w-full">
          <input
            defaultValue={"John's House 02"}
            type="text"
            className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full font-semibold focus:border-primary focus:border-[2px] outline-none"
          />
          <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
            {"Product Name"}
          </div>
        </div>

        <div className="flex w-full gap-[30px]">
          <div className="relative flex-1">
            <input
              defaultValue={"Real Estate"}
              disabled
              type="text"
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              placeholder="Category"
            />
            <IoIosArrowDown size={20} className="absolute right-4 top-3" />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
              {"Category"}
            </div>
            <div></div>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              defaultValue={"JohnnyVille"}
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
            />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
              {"Company Name"}
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col relative w-full gap-2">
          <textarea
            placeholder="Add a brief description of your product..."
            className="h-full border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
          ></textarea>
          <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
            {"Product Description"}
          </div>
          <div className="font-medium text-[#ABABAB] ">
            *This will help the advertiser know more about your product.
          </div>
        </div>
      </div>
    </>
  );
};
