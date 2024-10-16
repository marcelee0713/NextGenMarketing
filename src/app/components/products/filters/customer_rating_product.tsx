import { GetProductsParams } from "@/interfaces/user/user.interface";
import StarRating from "@mil-rlib/reactjs-star-rating";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface props {
  params: GetProductsParams;
  setParams: Dispatch<SetStateAction<GetProductsParams>>;
}

export const CustomerRatingProducts = ({ params, setParams }: props) => {
  const [stars, setStars] = useState(params.filter?.customerRating);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setStars(params.filter?.customerRating);
  }, [isOpen]);

  return (
    <div className="relative bottom-1 flex flex-col z-10">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-[45px] border border-[#ABABAB] pl-5 pr-3 flex justify-between gap-2 items-center rounded-lg cursor-pointer select-none"
      >
        <div>
          {params.filter?.customerRating
            ? `Customer Rating: ${stars} stars`
            : `Customer Rating`}
        </div>
        <RiArrowDropDownLine size={30} className="text-textColor" />
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between absolute shadow-nav h-fit w-[300px] bg-white top-14 rounded-lg">
          <div className="flex flex-col gap-4 px-5 py-3">
            <div>Customer Rating</div>

            <StarRating
              activeStars={stars}
              totalStars={5}
              onClick={(starCount) => setStars(starCount)}
              inActiveStarStyle={{
                color: "#383838",
              }}
              activeStarStyle={{
                color: "#3562ff",
              }}
            />
          </div>

          <div className="flex justify-between items-center border-t-2 p-5">
            <button
              onClick={() => {
                setStars(undefined);
                setParams({
                  ...params,
                  filter: {
                    ...params.filter,
                    customerRating: undefined,
                  },
                });
              }}
            >
              Clear
            </button>

            <button
              onClick={() => {
                setParams({
                  ...params,
                  filter: {
                    ...params.filter,
                    customerRating: stars,
                  },
                });
              }}
              className="bg-primary px-4 py-[6px] text-white font-normal rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
