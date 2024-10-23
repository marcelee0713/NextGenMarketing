import { GetOrdersParams, OrderItem } from "@/interfaces/orders/product";
import React, { Dispatch, SetStateAction } from "react";
import { OrderTabs } from "./tabs";
import { OrderFilters } from "./sortBy";
import { OrderTable } from "./table";

interface props {
  orderParams: GetOrdersParams;
  setOrderParams: Dispatch<SetStateAction<GetOrdersParams>>;
  orders: OrderItem[];
}

export const OrdersContents: React.FC<props> = ({
  orders,
  orderParams,
  setOrderParams,
}) => {
  return (
    <div className="flex-1 flex flex-col bg-white rounded-lg text-textColor py-4 px-5 gap-5">
      <div className="font-semibold text-xl">My Orders</div>
      <div className="flex justify-between gap-2 h-[50px] items-center">
        <OrderTabs
          currentTab={orderParams.type ?? "All"}
          orderParams={orderParams}
          setOrderParams={setOrderParams}
        />
        <OrderFilters
          orderParams={orderParams}
          setOrderParams={setOrderParams}
        />
      </div>
      <OrderTable orders={orders} />
    </div>
  );
};
