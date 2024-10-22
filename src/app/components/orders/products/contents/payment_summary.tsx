import { AFFLIATE_CODES } from "@/constants";
import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import { formatToCurrency } from "@/utils";
import { GetProduct } from "@/utils/data_access/users";
import React from "react";

interface props {
  productId: string;
  ownerId: string;
  originalPrice: number;
  discount: number;
  promoCode: string | null;
  selectedAddOns: number[];
}

export const PaymentSummary: React.FC<props> = ({
  productId,
  ownerId,
  discount,
  originalPrice,
  promoCode,
  selectedAddOns,
}) => {
  const discounted = originalPrice * discount;

  const discountedPrice = originalPrice - discounted;

  const product = GetProduct("", productId, ownerId);

  const addOns: ProductAddOns[] = selectedAddOns.map((val) => {
    return product.data.addOns[val];
  });

  const sumOfAddOnsCost = addOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );

  const promoCodeDiscount = promoCode ? AFFLIATE_CODES[promoCode] : null;

  let totalAmount = sumOfAddOnsCost + discountedPrice;

  if (promoCodeDiscount) {
    totalAmount = totalAmount - totalAmount * promoCodeDiscount.discount;
  }

  const arr = [
    {
      name: "Amount Total",
      price: totalAmount,
    },
    {
      name: "Discounted Price",
      price: discountedPrice,
    },
    {
      name: "Amount Add-on Total",
      price: sumOfAddOnsCost,
    },
  ];

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="font-bold text-textColor text-lg">
            Payment Summary
          </div>
          {promoCodeDiscount && (
            <>
              <div className="h-1 w-1 rounded-full bg-textColor"></div>
              <div className="font-medium text-[#999999] text-xs">
                {`Promo Code Discount: ${promoCodeDiscount.discount * 100}%`}
              </div>
            </>
          )}
        </div>
        <div className="font-medium text-[#999999] text-sm">
          A short report on the payment status
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly p-5 border border-[#DCDCDC] rounded-md min-h-[70px] h-fit gap-5">
        {arr.map((val, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="font-medium text-sm text-[#999999]">{val.name}</div>
            <div className="font-semibold text-base">{`PHP ${formatToCurrency(
              val.price
            )}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
