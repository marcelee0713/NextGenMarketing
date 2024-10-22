import { PriceDetails } from "@/app/components/payment/price_details";
import { ProductAddOnInfo } from "@/app/components/product_payment/packages_add_on_info_product";
import { AFFLIATE_CODES } from "@/constants";
import { OrderProductData } from "@/interfaces/orders/product";
import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import { GetProduct } from "@/utils/data_access/users";
import React from "react";
import { CiLock } from "react-icons/ci";
import { DeliveryTime } from "./delivery_time";
import { BusinessBox } from "./business_box";
import defaultPfp from "../../../../../../public/images/user (1).png";

interface props {
  order: OrderProductData;
}

export const OrderProductsSideBar: React.FC<props> = ({ order }) => {
  const discounted =
    order.productData.data.price * order.productData.data.discount;

  const discountedPrice = order.productData.data.price - discounted;

  console.log("Discounted Price: " + discountedPrice);

  const product = GetProduct(
    "",
    order.productData.data.productId,
    order.productData.data.ownerId
  );

  const addOns: ProductAddOns[] =
    order.orderData.productDetails.addOnsIndexes.map((val) => {
      return product.data.addOns[val];
    });

  const sumOfAddOnsCost = addOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );

  const promoCodeDiscount = order.orderData.productDetails.promoCode
    ? AFFLIATE_CODES[order.orderData.productDetails.promoCode]
    : null;

  let totalAmount = sumOfAddOnsCost + discountedPrice;

  const receipt = new Map<string, number>([
    ["Price", discountedPrice],
    ["Add-On Total", sumOfAddOnsCost],
  ]);

  if (promoCodeDiscount) {
    totalAmount = totalAmount - totalAmount * promoCodeDiscount.discount;

    receipt.set("Discount", promoCodeDiscount.discount);
  }

  return (
    <div className="relative">
      <div className="sticky z-10 top-0 flex flex-col gap-[12px] min-w-[350px] w-[420px] bg-white min-h-[535px] max-h-full rounded-lg py-3">
        <div className="flex flex-col gap-[2px] px-4">
          <div className="font-bold">Order Summary</div>
          <div className="flex gap-1 items-center text-[#999999]">
            <CiLock />
            <div className="font-medium text-sm ">All payment protected.</div>
          </div>
        </div>
        <hr />
        <ProductAddOnInfo
          addOns={addOns}
          discountedPrice={discountedPrice}
          originalPrice={product.data.price}
          productName={product.data.name}
        />
        <PriceDetails receipt={receipt} totalAmount={totalAmount} />
        <DeliveryTime time={order.productData.data.deliveryTime} />
        <hr />
        <BusinessBox
          productBanner={defaultPfp}
          businessName={order.productData.businessProfile.businessName}
        />
      </div>
    </div>
  );
};
