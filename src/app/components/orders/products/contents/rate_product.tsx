import { OrderProductData } from "@/interfaces/orders/product";
import { ProductQualities } from "@/interfaces/user/user.product.interface";
import React, { Dispatch, SetStateAction } from "react";
import { RateProductRowItem } from "./rate_product_item";

interface props {
  qualities: ProductQualities[];
  order: OrderProductData;
  setOrder: Dispatch<SetStateAction<OrderProductData | null>>;
}

export const RateProduct: React.FC<props> = ({
  order,
  qualities,
  setOrder,
}) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col">
        <div className="font-bold text-textColor text-lg">Rate the Product</div>
        <div className="font-medium text-[#999999] text-sm">
          Rate the product base on specific details
        </div>
      </div>

      <div className="relative font-inter">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-[#DCDCDC] ">
          <thead className="w-full text-sm text-[#999999]">
            <tr className="bg-[#F6F6F6]">
              <th scope="col" className="px-6 py-3 font-medium">
                Qualities
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Thoughts
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {"Suggestions (Optional)"}
              </th>
              <th scope="col" className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {qualities.map((val, index) => (
              <RateProductRowItem
                key={index}
                qualityIndex={index}
                order={order}
                quality={val}
                setOrder={setOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
