import { ServiceFAQs, Reviews } from "@/interfaces/services/services.interface";
import React, { useState } from "react";
import { ModeHandler } from "./mode_handler";

interface props {
  faqs: ServiceFAQs[];
  reviews: Reviews[];
}

export const ServiceTabs: React.FC<props> = ({ faqs, reviews }) => {
  const [mode, setMode] = useState<
    "FAQS" | "Customer Reviews" | "Recommended for you"
  >("Customer Reviews");

  return (
    <div className="min-h-[395px] min-w-full  flex flex-col gap-[15px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="flex w-full gap-2 bg-[#ECF0F2] font-bold rounded-md p-2 text-sm">
        <button
          onClick={() => setMode("Customer Reviews")}
          className={`flex-1 py-4 flex items-center justify-center rounded-md ${
            mode === "Customer Reviews" && "bg-white text-primary"
          }`}
        >
          Customer Reviews
        </button>
        <button
          onClick={() => setMode("FAQS")}
          className={`flex-1 py-4 flex items-center justify-center rounded-md ${
            mode === "FAQS" && "bg-white text-primary"
          }`}
        >
          Frequently Asked
        </button>
        <button
          onClick={() => setMode("Recommended for you")}
          className={`flex-1 py-4 flex items-center justify-center rounded-md ${
            mode === "Recommended for you" && "bg-white text-primary"
          }`}
        >
          Service Recommendation
        </button>
      </div>
      <ModeHandler faqs={faqs} mode={mode} reviews={reviews} />
    </div>
  );
};
