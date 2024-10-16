import { IProduct } from "@/interfaces/user/user.product.interface";
import Image from "next/image";
import React from "react";
import defaultImage from "../../../../public/images/default.png";
import { formatToCurrency } from "@/utils";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";

interface props {
  data: IProduct[];
}

export const ProductsContainer: React.FC<props> = ({ data }) => {
  return (
    <div className="flex-1 grid grid-cols-myGridTemplate gap-[20px] text-sm ">
      {data.map((val, index) => {
        return (
          <Link
            href={`/products/${val.productId}`}
            className="flex flex-col gap-[2px] h-[260px] bg-white rounded-lg"
            key={index}
          >
            <div className="relative h-[185px] w-full">
              <Image
                src={val.coverImage ?? defaultImage}
                alt="Image"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-t-lg"
              />
            </div>
            <div className="flex flex-col w-full py-2 px-3 ">
              <div className="flex items-center justify-between text-textColor font-semibold">
                <div>{val.name}</div>
                <div>PHP {formatToCurrency(val.price)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 py-2 px-3 ">
              {val.tags.map((val, index) => (
                <div
                  key={index}
                  className="flex p-2 gap-2 border border-[#DCDCDC] rounded-md"
                >
                  <RiVerifiedBadgeFill className="text-primary" size={15} />
                  <div className="font-medium text-xs text-textColor">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
