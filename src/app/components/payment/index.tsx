"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../nav_bar";
import { GetServicesParams } from "@/interfaces/services/data_access";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { OrderSummary } from "@/interfaces/payment";
import { GetService } from "@/utils/data_access/services";
import { ServiceAddOns } from "@/interfaces/services/services.interface";
import { CreditCardInfo } from "./credit_card_info";
import { PackagesAddOnInfo } from "./packages_add_on_info";
import { CiLock } from "react-icons/ci";
import { PromoCode } from "./promo";
import { formatToCurrency } from "@/utils";
import { PriceDetails } from "./price_details";
import { CompletionTime } from "./completion_time";
import { useGlobalContext } from "../context";

export const MainPaymentPage = () => {
  const { setExpandNav } = useGlobalContext();
  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const searchParams = useSearchParams();

  const summary: OrderSummary = JSON.parse(searchParams.get("summary") ?? "");

  const service = GetService("", summary.partnerId, summary.serviceId);

  const servicePackages = service.packages;

  const currentPackage =
    servicePackages.packages[
      summary.selectedClass.toLowerCase() as keyof typeof servicePackages.packages
    ];

  const addOns: ServiceAddOns[] = summary.selectedAddOns.map((val) => {
    const index = parseInt(val);

    return service.addOns[index];
  });

  const sumOfAddOnsCost = addOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );

  const totalCompletionTime =
    addOns.reduce((total, addOn) => total + addOn.durationTime, 0) +
    currentPackage.delivery;

  const [receipt, setReceipt] = useState<Map<string, number>>(
    new Map<string, number>([
      ["Package", currentPackage.price],
      ["Add-On Total", sumOfAddOnsCost],
    ])
  );

  const [totalAmount, setTotalAmount] = useState(
    sumOfAddOnsCost + currentPackage.price
  );

  useEffect(() => {
    let sum = 0;
    let discount = 0;

    for (const entry of Array.from(receipt.entries())) {
      const key = entry[0];
      const value = entry[1];

      if (key === "Discount") {
        discount = value;
        continue;
      }

      sum += value;
    }

    if (discount > 0) {
      sum = sum - sum * discount;
    }

    console.log("The sum: " + sum);

    setTotalAmount(sum);
  }, [receipt]);

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-8 flex flex-col items-stretch justify-center text-textColor container mx-auto no-scrollbar overflow-y-auto ">
        <Link
          href={`/service/${summary.partnerId}/${summary.serviceId}`}
          className="flex gap-2 items-center"
        >
          <IoIosArrowBack size={20} />
          <div className="font-semibold text-xl">Previous Page</div>
        </Link>
        <div className="flex gap-5 max-h-full min-h-[730px] max-w-full">
          <CreditCardInfo />
          <div className="min-w-[380px] w-[490px] flex flex-col bg-white rounded-lg py-3 gap-[15px] ">
            <div className="flex flex-col gap-[2px] px-4">
              <div className="font-bold">Order Summary</div>
              <div className="flex gap-1 items-center text-[#999999]">
                <CiLock />
                <div className="font-medium text-sm ">
                  All payment protected.
                </div>
              </div>
            </div>
            <hr />
            <PackagesAddOnInfo
              currentPackage={currentPackage}
              addOns={addOns}
            />
            <PromoCode receipt={receipt} setReceipt={setReceipt} />

            <PriceDetails receipt={receipt} totalAmount={totalAmount} />

            <CompletionTime time={totalCompletionTime} />

            <Link
              onClick={() => {
                setExpandNav(false);
              }}
              href={"/requirements"}
              className="flex items-center justify-center h-[45px]  text-white bg-primary mx-8 rounded-[4px] font-bold text-sm"
            >
              {`Pay (PHP ${formatToCurrency(totalAmount)})`}
            </Link>

            <div className="w-full text-center text-xs font-medium text-[#999999]">
              By clicking, you agree to{" "}
              <span className="font-semibold text-primary cursor-pointer">
                Terms and Conditions
              </span>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
