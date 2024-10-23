"use client";
import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { useState } from "react";
import NavBar from "../../nav_bar";
import { BreadCrumbNav } from "../../services/breadcrumb_nav";
import { TopBar } from "../../services/top_bar";
import { GetOrders } from "@/utils/data_access/orders";
import { GetOrdersParams } from "@/interfaces/orders/product";
import { OrdersContents } from "./contents";

export const MainOrdersPage = () => {
  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const [orderParams, setOrderParams] = useState<GetOrdersParams>({
    userId: "userId1",
  });

  const orders = GetOrders(orderParams);

  console.table(orders);

  console.log("Params");
  console.table(orderParams);

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 no-scrollbar overflow-y-auto">
        <TopBar params={params} setParams={setParams} />
        <BreadCrumbNav currentCategory={"Orders"} />
        <OrdersContents
          orders={orders}
          orderParams={orderParams}
          setOrderParams={setOrderParams}
        />
      </main>
    </>
  );
};
