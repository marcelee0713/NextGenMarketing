import {
  IProductEvaluation,
  ProductFAQs,
} from "@/interfaces/user/user.product.interface";
import React, { useState } from "react";
import { ModeHandlerProducts } from "./mode_handler";

interface props {
  faqs: ProductFAQs[];
  evaluations: IProductEvaluation[];
}

export const ProductTabs: React.FC<props> = ({ faqs, evaluations }) => {
  const [mode, setMode] = useState<
    "FAQS" | "Evaluations" | "Recommended for you"
  >("Evaluations");

  return (
    <div className="min-h-[350px] min-w-full h-fit flex flex-col gap-[15px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="flex w-full gap-2 bg-[#ECF0F2] font-bold rounded-md p-2 text-sm">
        <button
          onClick={() => setMode("Evaluations")}
          className={`flex-1 py-4 flex items-center justify-center rounded-md ${
            mode === "Evaluations" && "bg-white text-primary"
          }`}
        >
          Evaluations
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
      <ModeHandlerProducts evalutions={evaluations} faqs={faqs} mode={mode} />
    </div>
  );
};
