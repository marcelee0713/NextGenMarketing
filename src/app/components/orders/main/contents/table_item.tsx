import { OrderItem } from "@/interfaces/orders/product";
import Image from "next/image";
import React from "react";

import defaultImage from "../../../../../../public/images/default.png";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface props {
  order: OrderItem;
}

export const OrderTableItem: React.FC<props> = ({ order }) => {
  const router = useRouter();
  let statusBgColor = "#DCE4FF";

  let statusTextColor = "primary";

  if (order.status === "Cancelled" || order.status === "Pending") {
    statusBgColor = "#FFEFDC";
    statusTextColor = "#EB7D00";
  }

  if (order.status === "Paid") {
    statusBgColor = "#E0FFE3";
    statusTextColor = "#00BA13";
  }

  if (order.status === "Due") {
    statusBgColor = "#FFE9E9";
    statusTextColor = "#FF0000";
  }

  return (
    <tr
      onClick={() => {
        if (order.type === "PRODUCT")
          router.push(`/orders/product/${order.id}`);
      }}
      className="bg-white text-textColor font-semibold text-sm cursor-pointer"
    >
      <th scope="row" className="px-6 py-4">
        <div className="relative w-auto h-[60px]">
          <Image
            alt="an image"
            src={order.preview ?? defaultImage}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </th>
      <td className="px-6 py-4 h-full text-center">
        <FaHeart className="text-[#FF3E3E] inline-block" size={20} />
      </td>
      <td
        className="px-6 py-8 overflow-hidden text-ellipsis whitespace-nowrap"
        style={{ maxWidth: "7ch" }}
      >
        {order.name}
      </td>
      <td className="px-6 py-4 text-primary">{order.projectProgress}</td>
      <td className="px-6 py-4">{order.merchant}</td>
      <td className="px-6 py-4">{order.price}</td>
      <td className="px-6 py-4 h-full text-center">
        {order.type === "SERVICE" && (
          <div
            style={{ backgroundColor: statusBgColor, color: statusTextColor }}
            className="inline-block px-5 py-1 rounded-md w-24"
          >
            {order.status}
          </div>
        )}
      </td>
    </tr>
  );
};
