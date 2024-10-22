"use client";
import { GetProductsParams } from "@/interfaces/user/user.interface";
import React, { useState } from "react";
import NavBarProducts from "../../products/nav_bar";
import { TopBarProducts } from "../../products/top_bar";
import { BreadCrumbNav } from "../../services/breadcrumb_nav";
import { GetOrderProductData } from "@/utils/data_access/orders";
import { OrderProductContents } from "./contents";

interface props {
  orderId: string;
}

export const MainOrderProductPage: React.FC<props> = ({ orderId }) => {
  const [params, setParams] = useState<GetProductsParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const [data, setData] = useState(GetOrderProductData(orderId));

  console.log(data);

  return (
    <>
      <NavBarProducts params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 no-scrollbar overflow-y-auto">
        <TopBarProducts enableSearchInput />
        <BreadCrumbNav
          currentCategory="Orders"
          currentProfileName={data?.productData.data.name}
        />
        {data && <OrderProductContents order={data} setOrder={setData} />}
      </main>
    </>
  );
};
