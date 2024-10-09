import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface prop {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<prop> = ({ answer, question }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      onClick={() => setExpand(!expand)}
      className="flex justify-between w-full items-center cursor-pointer"
    >
      <div className="flex flex-col gap-2 text-sm">
        <div className="font-medium">{question}</div>
        {expand && <div className="font-medium text-[#999999]">{answer}</div>}
      </div>

      {expand ? (
        <IoIosArrowUp className="text-textColor" />
      ) : (
        <IoIosArrowDown className="text-textColor" />
      )}
    </div>
  );
};
