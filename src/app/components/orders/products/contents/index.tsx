import { OrderProductData } from "@/interfaces/orders/product";
import React, { Dispatch, SetStateAction, useState } from "react";
import { OrderProductHeader } from "./header";
import { OrderTracker } from "./order_tracker";
import { OrderProductTabs } from "./tabs";
import { WriteReview } from "./write_review";
import { RateProduct } from "./rate_product";
import { PaymentSummary } from "./payment_summary";
import { OrderProductsSideBar } from "../side_bar";

interface props {
  order: OrderProductData;
  setOrder: Dispatch<SetStateAction<OrderProductData | null>>;
}

export const OrderProductContents: React.FC<props> = ({ order, setOrder }) => {
  const [tab, setTab] = useState<"RATE" | "CONTACT" | "INVOICE">("RATE");

  return (
    <div className="flex-1 flex gap-[12px] font-inter text-textColor">
      <div className="flex-1 min-w-[940px] flex flex-col gap-[20px] bg-white rounded-lg h-full px-5 py-3">
        <OrderProductHeader
          businessName={order.productData.businessProfile.businessName}
          createdAt={order.orderData.createdAt}
          orderId={order.orderData.orderId}
          productName={order.productData.data.name}
        />

        <OrderTracker progress={order.orderData.details.progress} />

        <div className="flex flex-col gap-[12px]">
          <OrderProductTabs currentTab={tab} setTab={setTab} />
          <hr />
        </div>

        <WriteReview order={order} setOrder={setOrder} />

        <RateProduct
          order={order}
          setOrder={setOrder}
          qualities={order.productData.data.qualities}
        />

        <PaymentSummary
          productId={order.productData.data.productId}
          ownerId={order.productData.data.ownerId}
          discount={order.productData.data.discount}
          originalPrice={order.productData.data.price}
          promoCode={order.orderData.productDetails.promoCode}
          selectedAddOns={order.orderData.productDetails.addOnsIndexes}
        />
      </div>
      <OrderProductsSideBar order={order} />
    </div>
  );
};
