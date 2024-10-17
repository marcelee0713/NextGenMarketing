import React from "react";
import { ProductFAQs } from "@/interfaces/user/user.product.interface";
import { FAQItem } from "../../service/service-tabs/faq/faq_item";

interface props {
  faqs: ProductFAQs[];
}

export const FAQsProducts: React.FC<props> = ({ faqs }) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="font-bold">{"FAQs"}</div>
      <div className="flex-1 flex flex-col gap-5">
        {faqs.map((val) => {
          return (
            <FAQItem
              answer={val.answer}
              question={val.questions}
              key={val.productId}
            />
          );
        })}
      </div>
    </div>
  );
};
