import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { GetProductsParams } from "@/interfaces/user/user.interface";
import { useSearchParams } from "next/navigation";
import { OrderSummaryProduct } from "@/interfaces/payment";
import { GetProduct } from "@/utils/data_access/users";
import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import NavBarProducts from "../products/nav_bar";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { PromoCode } from "../payment/promo";
import { formatToCurrency } from "@/utils";
import { ProductAddOnInfo } from "./packages_add_on_info_product";
import { PriceDetails } from "../payment/price_details";
import { CreditCardAddressInfo } from "./creditcard_address_info";
import USER_PROFILES from "@/constants/users/profiles";

export const MainProductPaymentPage = () => {
  const { user, setExpandNav } = useGlobalContext();

  const [addressIndex, setAddressIndex] = useState<number>(0);

  const userId = user?.userId ?? "userId1";

  const userData = USER_PROFILES[userId];

  const [params, setParams] = useState<GetProductsParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const searchParams = useSearchParams();

  const summary: OrderSummaryProduct = JSON.parse(
    searchParams.get("summary") ?? ""
  );

  const product = GetProduct("", summary.productId, summary.userId);

  const addOns: ProductAddOns[] = summary.selectedAddOns.map((val) => {
    const index = parseInt(val);

    return product.data.addOns[index];
  });

  const sumOfAddOnsCost = addOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );

  const discounted = product.data.price * product.data.discount;
  const discountedPrice = product.data.price - discounted;

  const [receipt, setReceipt] = useState<Map<string, number>>(
    new Map<string, number>([
      ["Price", discountedPrice],
      ["Add-On Total", sumOfAddOnsCost],
    ])
  );

  const [totalAmount, setTotalAmount] = useState(
    sumOfAddOnsCost + discountedPrice
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
      <NavBarProducts params={params} setParams={setParams} />
      <main className="font-inter flex-1 gap-8 flex flex-col items-stretch justify-center text-textColor container mx-auto no-scrollbar overflow-y-auto">
        <Link
          href={`/service/${summary.userId}/${summary.productId}`}
          className="flex gap-2 items-center"
        >
          <IoIosArrowBack size={20} />
          <div className="font-semibold text-xl">Previous Page</div>
        </Link>
        <div className="flex gap-5 max-h-full max-w-full min-h-[730px] h-[730px]">
          <CreditCardAddressInfo
            setAddressIndex={setAddressIndex}
            addressesList={userData.addresses}
            addressIndex={addressIndex}
          />
          <div className="sticky min-w-[380px] w-[490px] flex flex-col bg-white rounded-lg py-3 gap-[12px] flex-1 ">
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
            <ProductAddOnInfo
              addOns={addOns}
              discountedPrice={discountedPrice}
              originalPrice={product.data.price}
              productName={product.data.name}
            />
            <PromoCode receipt={receipt} setReceipt={setReceipt} />

            <PriceDetails receipt={receipt} totalAmount={totalAmount} />

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
