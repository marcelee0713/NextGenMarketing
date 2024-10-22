import { OrderProductData } from "@/interfaces/orders/product";
import { ProductQualities } from "@/interfaces/user/user.product.interface";
import React, { Dispatch, SetStateAction, useState } from "react";
import { RateProductFilter } from "./rate_product_filter";
import {
  IUserProductOrders,
  OrderRatedProductQuality,
} from "@/interfaces/user/user.interface";
import { formatDate } from "@/utils";
import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";

interface props {
  qualityIndex: number;
  quality: ProductQualities;
  order: OrderProductData;
  setOrder: Dispatch<SetStateAction<OrderProductData | null>>;
}

export const RateProductRowItem: React.FC<props> = ({
  qualityIndex,
  order,
  quality,
  setOrder,
}) => {
  //TODO: FIX Bugs

  const alreadySubmits = order.orderData.details.ratedQualities.has(
    quality.name
  );

  const [currentObj, setObj] = useState<OrderRatedProductQuality | undefined>(
    order.orderData.details.ratedQualities.get(quality.name)
  );

  const updatable = currentObj ? currentObj.updatedAt === null : true;

  const thoughts = quality.thoughts.map((val) => val.name);

  const [suggestion, setSuggestion] = useState<string | null>(
    currentObj?.suggestions ?? null
  );

  const [thought, setThought] = useState(
    currentObj ? thoughts[currentObj.thoughtSelectedIndex] : ""
  );

  const [thoughtIndex, setThoughtIndex] = useState<number | null>(
    currentObj ? currentObj.thoughtSelectedIndex : null
  );

  const onSuggestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuggestion(e.target.value);
  };

  const onSubmit = () => {
    if (!thought) return;

    const obj: OrderRatedProductQuality = {
      createdAt: new Date(),
      productQualitiesIndex: qualityIndex,
      suggestions: suggestion,
      thoughtSelectedIndex: thoughtIndex ?? 0,
      updatedAt: null,
    };

    if (currentObj) {
      if (currentObj.thoughtSelectedIndex === thoughtIndex) return;

      obj.thoughtSelectedIndex = thoughtIndex ?? 0;

      obj.updatedAt = new Date();
    }

    setObj({
      ...obj,
    });

    const newMap = new Map<string, OrderRatedProductQuality>(
      order.orderData.details.ratedQualities
    );

    newMap.set(quality.name, obj);

    const newOrder: IUserProductOrders = {
      ...order.orderData,
      details: {
        ...order.orderData.details,
        ratedQualities: newMap,
      },
    };

    USER_PRODUCT_ORDERS.set(order.orderData.orderId, newOrder);

    setOrder({
      ...order,
      orderData: {
        ...newOrder,
      },
    });
  };

  return (
    <tr className="bg-white text-textColor">
      <th scope="row" className="px-6 py-4 font-medium flex flex-col">
        <div>{quality.name}</div>
        {quality.subtext && (
          <div className="text-xs text-[#999999]">{quality.subtext}</div>
        )}
      </th>
      <td className="px-6 py-4">
        <RateProductFilter
          filterArr={thoughts}
          element={thought}
          textFallback="Your thoughts"
          setElement={setThought}
          onSelect={(index) => {
            setThoughtIndex(index);
          }}
          disabled={!updatable}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          disabled={!updatable}
          value={suggestion ?? ""}
          onChange={onSuggestionChange}
          placeholder="Your suggestions for improvement"
          className="h-[40px] w-full px-2 border border-[#DCDCDC] rounded-md focus:rounded-md focus:outline-primary disabled:cursor-not-allowed"
        />
      </td>
      <td className="px-6 py-4 relative group">
        <button
          disabled={!updatable}
          onClick={onSubmit}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline disabled:cursor-not-allowed"
        >
          {alreadySubmits ? "Update" : "Submit"}
        </button>

        {alreadySubmits && (
          <div className="hidden group-hover:flex flex-col justify-between absolute shadow-nav gap-1 h-fit w-[150px] bg-white px-3 py-2 rounded-lg z-10 text-xs font-medium text-[#999999] left-0">
            <div>You can only update this row once</div>
            <hr />
            <div>{`Created at: ${formatDate(
              currentObj?.createdAt ?? new Date()
            )}`}</div>
          </div>
        )}
      </td>
    </tr>
  );
};
