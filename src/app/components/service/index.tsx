"use client";

import React from "react";
import { useGlobalContext } from "../context";

interface props {
  serviceId: string;
}

export const MainServicePage: React.FC<props> = ({ serviceId }) => {
  const { expandNav } = useGlobalContext();

  console.log(expandNav);

  return (
    <div className="flex flex-col">
      <div>{serviceId}</div>
    </div>
  );
};
