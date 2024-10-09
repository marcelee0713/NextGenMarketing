import { ServiceFAQs } from "@/interfaces/services/services.interface";
import React from "react";
import { FAQItem } from "./faq_item";

interface props {
  faqs: ServiceFAQs[];
}

export const FAQs: React.FC<props> = ({ faqs }) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="font-bold">{"FAQs"}</div>
      <div className="flex-1 flex flex-col gap-5">
        {faqs.map((val) => {
          return (
            <FAQItem
              answer={val.answer}
              question={val.questions}
              key={val.serviceId}
            />
          );
        })}
      </div>
    </div>
  );
};
