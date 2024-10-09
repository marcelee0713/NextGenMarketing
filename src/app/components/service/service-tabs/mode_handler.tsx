import { ServiceFAQs, Reviews } from "@/interfaces/services/services.interface";
import React from "react";
import { FAQs } from "./faq/faq";
import { CustomerReviews } from "./customer_reviews/customer_reviews";
import { ServiceRecommendations } from "./recommendations";

interface props {
  faqs: ServiceFAQs[];
  reviews: Reviews[];
  mode: "FAQS" | "Customer Reviews" | "Recommended for you";
}

export const ModeHandler: React.FC<props> = ({ faqs, mode, reviews }) => {
  if (mode === "FAQS") {
    return <FAQs faqs={faqs} />;
  }

  if (mode === "Customer Reviews") {
    return <CustomerReviews reviews={reviews} />;
  }

  if (mode === "Recommended for you") {
    return <ServiceRecommendations />;
  }

  return <div></div>;
};
