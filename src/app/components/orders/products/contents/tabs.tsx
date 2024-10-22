import React, { Dispatch, SetStateAction } from "react";

interface props {
  currentTab: "RATE" | "CONTACT" | "INVOICE";
  setTab: Dispatch<SetStateAction<"RATE" | "CONTACT" | "INVOICE">>;
}

export const OrderProductTabs: React.FC<props> = ({ currentTab, setTab }) => {
  return (
    <div className="flex font-semibold text-sm gap-10">
      <button
        onClick={() => setTab("RATE")}
        className={`relative ${currentTab === "RATE" && "text-primary"}`}
      >
        <div>Rate Product</div>
        {currentTab === "RATE" && (
          <div className="absolute bg-primary h-1 w-full rounded-full top-7"></div>
        )}
      </button>
      <button
        onClick={() => setTab("CONTACT")}
        className={`relative ${currentTab === "CONTACT" && "text-primary"}`}
      >
        Contact Seller
        {currentTab === "CONTACT" && (
          <div className="absolute bg-primary h-1 w-full rounded-full top-7"></div>
        )}
      </button>
      <button
        onClick={() => setTab("INVOICE")}
        className={`relative ${currentTab === "INVOICE" && "text-primary"}`}
      >
        Invoicing
        {currentTab === "INVOICE" && (
          <div className="absolute bg-primary h-1 w-full rounded-full top-7"></div>
        )}
      </button>
    </div>
  );
};
