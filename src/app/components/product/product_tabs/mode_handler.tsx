import {
  IProductEvaluation,
  ProductFAQs,
} from "@/interfaces/user/user.product.interface";
import React from "react";
import { FAQsProducts } from "./faq";
import { ProductEvaluations } from "./evaluations";
import { ProductRecommendations } from "./recommendations";

interface props {
  faqs: ProductFAQs[];
  evalutions: IProductEvaluation[];
  mode: "FAQS" | "Evaluations" | "Recommended for you";
}

export const ModeHandlerProducts: React.FC<props> = ({
  faqs,
  mode,
  evalutions,
}) => {
  if (mode === "FAQS") {
    return <FAQsProducts faqs={faqs} />;
  }

  if (mode === "Evaluations") {
    return <ProductEvaluations evaluations={evalutions} />;
  }

  if (mode === "Recommended for you") {
    return <ProductRecommendations />;
  }

  return <div></div>;
};
