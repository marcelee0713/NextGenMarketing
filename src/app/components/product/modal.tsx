import { ProductAddOns } from "@/interfaces/user/user.product.interface";
import { formatToCurrency } from "@/utils";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoChatbubbles, IoStar } from "react-icons/io5";
import Carousel from "../service/gallery/carousel";
import { AddOnsContainerProduct } from "./contents/add_on_container";
import { OrderSummaryProduct } from "@/interfaces/payment";
import { useGlobalContext } from "../context";
import { useRouter } from "next/navigation";

interface props {
  userId: string;
  productId: string;
  addOns: ProductAddOns[];
  productName: string;
  businessName: string;
  originalPrice: number;
  discountedPrice: number;
  setModal: Dispatch<SetStateAction<boolean>>;
  images: string[];
  overAllRating: number;
}

export const ProductModal: React.FC<props> = ({
  addOns,
  businessName,
  originalPrice,
  discountedPrice,
  productName,
  setModal,
  images,
  overAllRating,
  productId,
  userId,
}) => {
  const router = useRouter();

  const { setExpandNav } = useGlobalContext();

  const [quantity, setQuantity] = useState(1);

  const [unitPrice, setUnitPrice] = useState(discountedPrice);

  const [receipt, setReceipt] = useState<Map<string, number>>(
    new Map().set("discountedPrice", discountedPrice)
  );

  useEffect(() => {
    let sum = 0;
    for (const entry of Array.from(receipt.entries())) {
      const value = entry[1];

      sum += value;
      setUnitPrice(sum);
    }
  }, [receipt]);

  const mockReceipt = new Map(receipt);
  mockReceipt.delete("discountedPrice");
  const currentAddOns: string[] = Array.from(mockReceipt.keys());

  const orderSummary: OrderSummaryProduct = {
    productId,
    userId,
    selectedAddOns: currentAddOns,
  };

  return (
    <div className="absolute inset-0 bg-opacity-80 bg-textColor w-full h-full z-10 flex items-center justify-center">
      <div className="flex min-w-[670px] max-w-full min-h-[730px] h-fit bg-white rounded-lg">
        <div className="flex-1 w-full flex flex-col bg-[#F5F7FF] rounded-lg gap-[12px]">
          <div className="flex flex-col pt-3 px-4">
            <div className="font-bold text-textColor">Order Options</div>
            <div className="font-medium text-[#999999] text-sm">
              Customize your order depending on your needs
            </div>
          </div>

          <hr />

          <div className="flex-1 flex flex-col gap-[12px] px-4">
            <div className="flex gap-2">
              <Carousel images={images} removeDots removeButtons />

              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col gap-2 h-fit rounded-lg border border-[#DCDCDC] text-textColor px-3 py-2 flex-1">
                  <div>
                    <div className="font-bold">{productName}</div>
                    <div className="font-medium text-sm">{businessName}</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-sm flex gap-2 items-center">
                      <IoStar size={20} />
                      <div className="flex font-bold items-center gap-1">
                        {overAllRating}{" "}
                        <span className="font-light">{"(158)"}</span>
                      </div>
                      |<div className="text-[#999999]">Sold count: {20} </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex line-through text-[#999999] font-medium bottom-5 text-xs">
                        PHP {formatToCurrency(originalPrice)}
                      </div>
                      <div className="font-bold text-lg">
                        PHP {formatToCurrency(discountedPrice)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border border-[#DCDCDC] rounded-lg py-3 gap-3">
                  <div className="flex gap-2 items-center justify-between px-4">
                    <div className="font-bold text-sm text-textColor">
                      How often do you need this order?
                    </div>
                    <FaCircleCheck className="text-primary" size={20} />
                  </div>
                  <hr />
                  <div className="flex justify-between items-center gap-4 px-4">
                    <div className="flex-1 flex justify-between items-center border-[2px] border-primary py-2 px-4 rounded-[4px] font-bold text-black relative">
                      <div>{quantity}</div>
                      <div className="flex items-center gap-2 text-lg">
                        <button
                          onClick={() => {
                            if (quantity > 1) {
                              setQuantity(quantity - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <button
                          onClick={() => {
                            if (quantity < 50) {
                              setQuantity(quantity + 1);
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="absolute text-primary font-semibold text-xs bg-[#F5F7FF] px-1 -top-2 right-[58px]">
                        Quantity
                      </div>
                    </div>
                    <div className="flex-1 flex border border-[#DCDCDC] py-2 px-4 rounded-[4px] text-black font-bold relative">
                      {formatToCurrency(unitPrice)}
                      <div className="absolute text-textColor font-semibold text-xs bg-[#F5F7FF] px-1 -top-2 right-[14.5px]">
                        {"Total Price (PHP)"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AddOnsContainerProduct
              addOns={addOns}
              receipt={receipt}
              setReceipt={setReceipt}
              setUnitPrice={setUnitPrice}
              unitPrice={unitPrice}
            />
          </div>

          <hr />

          <div className="flex justify-between items-center text-sm pb-3 px-4">
            <div className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg">
              <IoChatbubbles size={18} className="text-[#666666]" />
              Help
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setModal(false)}
                className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const parsifiedObj = JSON.stringify(orderSummary);

                  const obj: OrderSummaryProduct = JSON.parse(parsifiedObj);

                  console.table(obj);

                  setExpandNav(false);

                  router.push(
                    `/product-payment?summary=${JSON.stringify(orderSummary)}`
                  );
                }}
                className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold bg-primary text-white rounded-lg"
              >
                {`Continue (PHP ${formatToCurrency(unitPrice)})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
