"use client";
import { GetProductsParams } from "@/interfaces/user/user.interface";
import { GetProduct } from "@/utils/data_access/users";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import NavBarProducts from "../products/nav_bar";
import { TopBarProducts } from "../products/top_bar";
import { BreadCrumbNav } from "../services/breadcrumb_nav";
import { ProductContents } from "./contents";

export const MainProductPage = () => {
  const [params, setParams] = useState<GetProductsParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });
  const pathname = usePathname();

  const arrayOfRoutes = pathname.split("/");

  const productId = arrayOfRoutes[3];
  const ownerId = arrayOfRoutes[2];

  console.table(arrayOfRoutes);

  const { data } = useSWR(
    ["/get-service", productId, ownerId],
    ([key, productId, ownerId]) => GetProduct(key, productId, ownerId),
    {
      onSuccess(data) {
        setParams({
          ...params,
          filter: {
            ...params.filter,
            category: data.data.category,
          },
        });
      },
    }
  );

  return (
    <>
      <NavBarProducts params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 overflow-x-auto">
        <TopBarProducts />
        <BreadCrumbNav
          currentCategory={params.filter?.category}
          currentProfileName={data?.data.name}
        />
        {data && <ProductContents data={data} />}
      </main>
    </>
  );
};
