"use client";

import React, { useEffect, useState } from "react";
import { TopBarProducts } from "../products/top_bar";
import { AnalyzedProductData, GetProduct } from "@/utils/data_access/users";
import { BreadCrumbNav } from "../services/breadcrumb_nav";
import { usePathname } from "next/navigation";
import { AnalyticsContent } from "./contents";
import { ProductAnalyzedData } from "@/interfaces/user/user.product.interface";
import { GetServicesParams } from "@/interfaces/services/data_access";
import NavBar from "../nav_bar";

export const MainAnalyticsPage = () => {
  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const pathname = usePathname();

  const arrayOfRoutes = pathname.split("/");

  const productId = arrayOfRoutes[3];
  const ownerId = arrayOfRoutes[2];

  const [data, setData] = useState<ProductAnalyzedData | null>(null);

  useEffect(() => {
    const fetchedData = AnalyzedProductData(ownerId, productId);
    setData(fetchedData);
  }, []);

  const product = GetProduct("", productId, ownerId);

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 overflow-x-auto">
        <TopBarProducts enableSearchInput />
        <BreadCrumbNav
          currentCategory={"Analytics"}
          currentProfileName={product.data.name}
        />
        {data && <AnalyticsContent analyzedData={data} product={product} />}
      </main>
    </>
  );
};
