import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import StarRating from "@mil-rlib/reactjs-star-rating";
import Link from "next/link";
import { Badge } from "@/app/components/service/profile/badge";
import { BadgeType } from "@/types/partner/partner.types";

interface props {
  id: string;
  type: BadgeType;
  partnerId: string;
  image: StaticImageData | string;
  pfp: StaticImageData | string;
  parterUsername: string;
  shortDescription: string;
  rating: number;
  ratePerHour: number;
  brothefuckisthisshit?: boolean;
}

export const ServiceItem = ({
  id,
  partnerId,
  type,
  image,
  pfp,
  parterUsername,
  ratePerHour,
  rating,
  shortDescription,
  brothefuckisthisshit,
}: props) => {
  return (
    <Link
      href={`/service/${partnerId}/${id}`}
      className={`flex flex-col gap-[10px] h-[300px] group ${
        brothefuckisthisshit && "flex-shrink-0 min-w-[405px]"
      }`}
    >
      <div className="relative h-full">
        <Image
          src={image}
          alt="banner"
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-serviceItem flex-1 h-full group-hover:shadow-nav"
          fill
        />
      </div>

      <div className="flex flex-col h-full gap-4 justify-between">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between gap-5">
            <div className="flex gap-[10px] items-center">
              <Image src={pfp} alt="banner" height={25} width={25} />
              <div>
                Ad by <span className="font-bold">{parterUsername}</span>
              </div>
            </div>

            <Badge type={type} />
          </div>
          <div>{shortDescription}</div>
          <div className="flex gap-1">
            <StarRating activeStars={rating} totalStars={5} disabled />
            <div className="font-bold">
              {rating} <span className="font-light">{"(2k+)"}</span>
            </div>
          </div>
        </div>

        <div className="font-semibold">PHP{ratePerHour}/hr</div>
      </div>
    </Link>
  );
};
