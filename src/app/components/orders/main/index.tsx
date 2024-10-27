"use client";
import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { useEffect, useState } from "react";
import NavBar from "../../nav_bar";
import { BreadCrumbNav } from "../../services/breadcrumb_nav";
import { TopBar } from "../../services/top_bar";
import { GetOrders } from "@/utils/data_access/orders";
import { GetOrdersParams, OrderItem } from "@/interfaces/orders/product";
import { OrdersContents } from "./contents";
import { AnalyzedProductData } from "@/utils/data_access/users";

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

  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    setOrders(GetOrders(orderParams));

    console.table(AnalyzedProductData("userId1", "productId9"));
  }, []);

  useEffect(() => {
    setOrders(GetOrders(orderParams));
  }, [orderParams]);

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
