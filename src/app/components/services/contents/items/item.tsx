import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import StarRating from "@mil-rlib/reactjs-star-rating";
import Link from "next/link";

interface props {
  id: string;
  image: StaticImageData | string;
  pfp: StaticImageData | string;
  parterUsername: string;
  shortDescription: string;
  rating: number;
  ratePerHour: number;
}

export const ServiceItem = ({
  id,
  image,
  pfp,
  parterUsername,
  ratePerHour,
  rating,
  shortDescription,
}: props) => {
  return (
    <Link
      href={`service/${id}`}
      className="flex flex-col gap-[10px] h-[300px] group "
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
          <div className="flex items-center justify-between">
            <div className="flex gap-[10px] items-center">
              <Image src={pfp} alt="banner" height={25} width={25} />
              <div>
                Ad by <span className="font-bold">{parterUsername}</span>
              </div>
            </div>

            <div className="py-1 px-4 bg-[#0B1F65] rounded-[4px] text-white">
              Next<span className="text-primary font-extrabold">Gen</span>
              <span className="font-semibold">Choice</span>
            </div>
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
