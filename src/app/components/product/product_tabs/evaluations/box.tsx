import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import defaultUserIcon from "../../../../../../public/images/user (1).png";
import Image from "next/image";
import StarRating from "@mil-rlib/reactjs-star-rating";

interface props {
  name: string;
  email: string;
  likesCount: number;
  rating: number;
  comment: string;
}

export const EvaluationBox: React.FC<props> = ({
  comment,
  email,
  likesCount,
  name,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-3 border border-[#DCDCDC] rounded-lg p-3 w-[375px] min-w-[300px] flex-shrink-0">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={defaultUserIcon} alt="pfp" width={35} height={35} />
          <div className="flex flex-col">
            <div className="font-bold text-sm">{name}</div>
            <div className="font-medium text-xs">{email}</div>
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
    </div>
  );
};
