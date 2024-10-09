"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { GetService } from "@/utils/data_access/services";
import { GetServicesParams } from "@/interfaces/services/data_access";
import NavBar from "../nav_bar";
import { BreadCrumbNav } from "../services/breadcrumb_nav";
import { TopBar } from "../services/top_bar";
import { ServiceContent } from "./contents";

export const MainServicePage = () => {
  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
    filter: {
      category: "Affiliate",
      isPro: true,
    },
    sortBy: "desc",
  });

  const pathname = usePathname();

  const arrayOfRoutes = pathname.split("/");

  const partnerId = arrayOfRoutes[2];
  const serviceId = arrayOfRoutes[3];

  const { data } = useSWR(
    ["/get-service", partnerId, serviceId],
    ([key, partnerId, serviceId]) => GetService(key, partnerId, serviceId),
    {
      onSuccess(data) {
        setParams({
          ...params,
          filter: {
            category: data?.details.category,
          },
        });
      },
    }
  );

  console.log(data);

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 overflow-x-auto">
        <TopBar params={params} setParams={setParams} />
        <BreadCrumbNav
          currentCategory={params.filter?.category}
          currentProfileName={data?.profile.username}
        />
        {data && <ServiceContent data={data} />}
      </main>
    </>
  );
};
