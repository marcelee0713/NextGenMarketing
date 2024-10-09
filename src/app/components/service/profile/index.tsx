import { BadgeType } from "@/types/partner/partner.types";
import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { Badge } from "./badge";
import { ProTag } from "./pro";

interface props {
  banner: string | StaticImageData;
  pfp: string | StaticImageData;
  username: string;
  overallRating: number;
  projectOnQueue: number;
  badge: BadgeType;
  isPro: boolean;
}

export const ServiceProfileDetails: React.FC<props> = ({
  badge,
  banner,
  isPro,
  overallRating,
  pfp,
  projectOnQueue,
  username,
}) => {
  return (
    <div className="flex flex-col h-[200px]">
      <div className="relative flex-1">
        <Image
          src={banner}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
        />

        <button className="flex gap-2 items-center justify-center px-3 py-2 bg-white bg-opacity-70 absolute text-textColor font-semibold rounded-[4px] text-sm right-2 top-2">
          Get to know me
          <GoArrowUpRight />
        </button>
      </div>
      <div className="flex-1 flex bg-white rounded-b-md items-center relative">
        <Image
          src={pfp}
          alt="pfp"
          className="absolute h-[125px] w-[125px] bottom-6 left-6 border-[5px] border-white rounded-full"
        />
        <div className="ml-[150px] flex justify-between w-full h-full py-3 px-5 items-start">
          <div className="flex flex-col text-textColor gap-[6px]">
            <div className="font-extrabold text-2xl">{username}</div>
            <div className="text-sm flex gap-2 items-center">
              <IoStar size={20} />
              <div className="flex font-bold items-center">
                {overallRating}
                <span className="font-light">{" (158)"}</span>
              </div>
              |
              <div className="text-[#999999]">
                {projectOnQueue} orders in queue
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Badge type={badge} />
            {isPro && <ProTag />}
          </div>
        </div>
      </div>
    </div>
  );
};
