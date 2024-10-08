"use client";

import React, { useEffect, useState } from "react";
import NavBar from "./nav_bar";
import {
  GetServicesParams,
  IServicesItem,
} from "@/interfaces/services/data_access";
import { TopBar } from "./services/top_bar";
import { BreadCrumbNav } from "./services/breadcrumb_nav";
import { Contents } from "./services/contents";
import { GetServices } from "@/utils/data_access/services";
import Pagination from "./services/contents/pagination"; // Import your Pagination component

export const MainServicesPage = () => {
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

  const [data, setData] = useState<IServicesItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // To keep track of total items

  useEffect(() => {
    const fetchData = async () => {
      const data = GetServices(params);
      setData(data.items);
      setTotalItems(data.fullLength); // Set the total length of items for pagination
    };

    fetchData();
  }, [params]);

  // Update the pagination state when the current page changes
  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        skip: (currentPage - 1) * prev.pagination.take,
      },
    }));
  }, [currentPage]);

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-10 flex flex-col text-primary p-5 px-6 no-scrollbar overflow-y-auto">
        <TopBar params={params} setParams={setParams} />
        <BreadCrumbNav currentCategory={params.filter?.category} />
        <Contents
          unFilteredLength={totalItems}
          params={params}
          setParams={setParams}
          data={data}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={params.pagination.take}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
};
