import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import {
  GetProductsParams,
  IUserProductOrders,
} from "@/interfaces/user/user.interface";
import { useRouter, useSearchParams } from "next/navigation";
import { OrderSummaryProduct } from "@/interfaces/payment";
import { GetProduct } from "@/utils/data_access/users";
import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import NavBarProducts from "../products/nav_bar";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { PromoCode } from "../payment/promo";
import { formatToCurrency, generateOrderId } from "@/utils";
import { ProductAddOnInfo } from "./packages_add_on_info_product";
import { PriceDetails } from "../payment/price_details";
import { CreditCardAddressInfo } from "./creditcard_address_info";
import USER_PROFILES from "@/constants/users/profiles";
import { SuccessModal } from "./modal";
import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";
import { DEFAULT_ORDER_PROGRESS } from "@/constants/users/products/evaluations";

export const MainProductPaymentPage = () => {
  const [orderId, setOrderId] = useState("orderId1");

  const [expand, setExpand] = useState(false);

  const { user, setExpandNav } = useGlobalContext();

  const router = useRouter();

  const [addressIndex, setAddressIndex] = useState<number>(0);

  const userId = user?.userId ?? "userId1";

  const userData = USER_PROFILES[userId];

  const [promoCode, setPromoCode] = useState<string | null>(null);

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

  const houseNo = userData.addresses[addressIndex].fullAddress.houseNoStreetNo;
  const barangay = userData.addresses[addressIndex].fullAddress.barangay;
  const city = userData.addresses[addressIndex].fullAddress.city;
  const province = userData.addresses[addressIndex].fullAddress.province;
  const region = userData.addresses[addressIndex].fullAddress.region;

  const currentAddress = `${houseNo}, ${barangay}, ${city}, ${province}, ${region}`;

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
            <PromoCode
              receipt={receipt}
              setReceipt={setReceipt}
              onChange={setPromoCode}
            />

            <PriceDetails receipt={receipt} totalAmount={totalAmount} />

            <button
              onClick={() => {
                const orderId = generateOrderId();

                setOrderId(orderId);

                const order: IUserProductOrders = {
                  orderId: orderId,
                  users: {
                    buyer: {
                      addressIndex: addressIndex,
                      userId: userData.userId,
                    },
                    seller: {
                      businessId: product.businessProfile.businessId,
                      userId: product.data.ownerId,
                    },
                  },
                  details: {
                    progress: DEFAULT_ORDER_PROGRESS,
                    ratedQualities: new Map(),
                    isCompleted: true,
                    review: undefined,
                  },
                  productDetails: {
                    addOnsIndexes: summary.selectedAddOns.map((val) =>
                      parseInt(val)
                    ),
                    productId: product.data.productId,
                    promoCode: promoCode,
                  },
                  createdAt: new Date(),
                };

                USER_PRODUCT_ORDERS.set(orderId, order);

                setExpand(true);

                console.table(USER_PRODUCT_ORDERS.get(orderId));
                console.table(USER_PRODUCT_ORDERS);
              }}
              className="flex items-center justify-center h-[45px]  text-white bg-primary mx-8 rounded-[4px] font-bold text-sm"
            >
              {`Pay (PHP ${formatToCurrency(totalAmount)})`}
            </button>

            <div className="w-full text-center text-xs font-medium text-[#999999]">
              By clicking, you agree to{" "}
              <span className="font-semibold text-primary cursor-pointer">
                Terms and Conditions
              </span>{" "}
            </div>
          </div>
        </div>
      </main>
      {expand && (
        <SuccessModal
          businessName={product.businessProfile.businessName}
          fullAddress={currentAddress}
          productName={product.data.name}
          onHome={() => {
            setExpandNav(false);
            router.push("/products");
          }}
          onProceed={() => {
            setExpandNav(false);
            router.push(`/orders/product/${orderId}`);
          }}
        />
      )}
    </>
  );
};
