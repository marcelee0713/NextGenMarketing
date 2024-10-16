import React, { forwardRef } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { formatToCurrency } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  route: string;
  coverImage: StaticImageData | string;
  images: string[];
  productName: string;
  productIntention: string;
  tags: string[];
  price: number;
}

// Use forwardRef to pass the ref to the actual anchor element
export const FeaturedItem = forwardRef<HTMLAnchorElement, props>(
  (
    { route, coverImage, images, price, productIntention, productName, tags },
    ref
  ) => {
    return (
      <Link
        href={route}
        passHref
        ref={ref} // Forward ref here
        className="flex flex-1 bg-white h-full rounded-r-lg min-w-full flex-shrink-0"
      >
        <div className="flex-1 w-full relative min-w-[200px]">
          <Image
            src={coverImage}
            alt="Cover Image"
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-l-lg"
          />
        </div>
        <div className="h-full w-[475px] min-w-[400px] flex flex-col gap-2 p-4 justify-between">
          <div className="flex flex-col gap-3">
            <div className="font-bold font-sora text-2xl">{productName}</div>
            <div className="flex gap-2 h-[125px] w-full">
              <div className="flex-1 w-full relative">
                <Image
                  src={images[0]}
                  alt="Image 1"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1 w-full relative">
                <Image
                  src={images[1]}
                  alt="Image 2"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="font-medium text-sm max-h-[80px] overflow-y-scroll stylish-y-scroll">
              {productIntention}
            </div>
            <hr />
            <div className="flex items-center gap-2">
              {tags.map((val, index) => (
                <div
                  key={index}
                  className="flex p-2 gap-2 border border-[#DCDCDC] rounded-md"
                >
                  <RiVerifiedBadgeFill className="text-primary" size={15} />
                  <div className="font-medium text-xs">{val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="font-semibold">PHP {formatToCurrency(price)}</div>
        </div>
      </Link>
    );
  }
);

FeaturedItem.displayName = "FeaturedItem";
