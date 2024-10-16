"use client";
import React, { useEffect, useState } from "react";
import { TopBarProducts } from "./top_bar";
import NavBarProducts from "./nav_bar";
import { GetProductsParams } from "@/interfaces/user/user.interface";
import { GetProducts } from "@/utils/data_access/users";
import Pagination from "../services/contents/pagination";
import { IProduct } from "@/interfaces/user/user.product.interface";
import { FeaturedProducts } from "./featured";
import { Filter } from "../services/contents/filters";
import {
  SHIPMENT_LOCATIONS_ARR_TYPE,
  ShipmentLocationsType,
} from "@/types/user/user.product.types";
import { CustomerRatingProducts } from "./filters/customer_rating_product";
import { MinMaxProductFilter } from "./filters/min_max";
import { ProductsContainer } from "./products_container";
import { IoIosArrowDown } from "react-icons/io";

export const MainProductsPage = () => {
  const [params, setParams] = useState<GetProductsParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
    filter: {
      category: "Appliances",
    },
    sortBy: "desc",
  });

  const [data, setData] = useState<IProduct[]>([]);
  const [featuredItems, setFeaturedItems] = useState<IProduct[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // To keep track of total items

  useEffect(() => {
    console.table(params);
    const fetchData = async () => {
      const data = GetProducts(params);
      setFeaturedItems(data.featuredItems);
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
      <NavBarProducts params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-5 flex flex-col text-primary p-5 px-6 no-scrollbar overflow-y-auto">
        <TopBarProducts />
        <FeaturedProducts products={featuredItems} />
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[18px] items-center text-textColor">
            <div className="font-semibold text-xl">Filters</div>
            <div className="font-bold text-sm">
              {totalItems}+ <span className="font-normal">results</span>
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-3 text-textColor font-semibold">
              <MinMaxProductFilter params={params} setParams={setParams} />
              <CustomerRatingProducts params={params} setParams={setParams} />
              <Filter
                filterArr={SHIPMENT_LOCATIONS_ARR_TYPE}
                textFallback="Shipment Location"
                element={params.filter?.deliveryLocations}
                onCancel={() => {
                  setParams({
                    ...params,
                    filter: {
                      ...params.filter,
                      deliveryLocations: undefined,
                    },
                  });
                }}
                onPress={(type) => {
                  setParams({
                    ...params,
                    filter: {
                      ...params.filter,
                      deliveryLocations: type as ShipmentLocationsType,
                    },
                  });
                }}
              />
            </div>
            <div className="flex items-center gap-2 text-textColor">
              <div>Sort by:</div>
              <div className="flex gap-1 items-center font-bold">
                <div>Latest</div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
        <ProductsContainer data={data} />

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
