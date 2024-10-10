import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import defaultUserIcon from "../../../../../../public/images/user (1).png";
import Image from "next/image";
import StarRating from "@mil-rlib/reactjs-star-rating";

interface props {
  likesCount: number;
  rating: number;
  comment: string;
}

export const ReviewBox: React.FC<props> = ({ comment, likesCount, rating }) => {
  return (
    <div className="flex flex-col gap-3 border border-[#DCDCDC] rounded-lg p-3 w-[350px] min-w-[300px] flex-shrink-0">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={defaultUserIcon} alt="pfp" width={35} height={35} />
          <div className="flex flex-col">
            <div className="font-bold text-sm">enriquesalado</div>
            <div className="font-medium text-xs">enriquesalado@gmail.com</div>
          </div>
        </div>
        <div className="font-medium text-sm flex gap-2 items-center">
          <FaRegThumbsUp />
          <div>{`Helpful? (${likesCount})`}</div>
        </div>
      </div>
      <hr />
      <div className="flex gap-2 items-center">
        <StarRating
          starStyle={{ fontSize: 15 }}
          activeStars={rating}
          totalStars={5}
          disabled
        />
        <div className="font-bold text-xs">{rating} stars</div>
        <div className="text-xs text-[#999999]">1 week ago</div>
      </div>
      <div className="flex-1 font-medium text-sm">{comment}</div>
      <div className="flex gap-6 text-sm">
        <div className="flex flex-col">
          <div className="font-medium text-black">Standard</div>
          <div className="font-medium text-[#999999]">Service Class</div>
        </div>
        <div className="h-full border-l-[1px] border-[#DCDCDC]"></div>
        <div className="flex flex-col">
          <div className="font-medium text-black">2 weeks</div>
          <div className="font-medium text-[#999999]">Project Duration</div>
        </div>
      </div>
    </div>
  );
};
