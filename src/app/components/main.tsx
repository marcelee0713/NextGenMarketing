"use client";
import React, { useState } from "react";
import NavBar from "./nav_bar";
import { SERVICES_CATEGORIES } from "@/constants/services";

export const MainServicePage = () => {
  const [category, setCategory] = useState(SERVICES_CATEGORIES[0]);
  return (
    <>
      <NavBar currentCategory={category} setCategory={setCategory} />
      <main className="flex-1 text-primary">{category}</main>
    </>
  );
};
