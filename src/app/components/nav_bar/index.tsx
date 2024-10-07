import Link from "next/link";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import logo from "../../../../public/images/logo.png";
import dashboardIcon from "../../../../public/svg/dashboard-svgrepo-com.svg";
import fireIcon from "../../../../public/svg/fire.svg";
import heartIcon from "../../../../public/svg/heart.svg";
import subscriptionIcon from "../../../../public/svg/subscription.svg";
import { NavSection } from "./section";
import { NavCategoriesSection } from "./section/categories_section";
import { GetServicesParams } from "@/interfaces/services/data_access";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

const NavBar = ({ params, setParams }: props) => {
  return (
    <nav className="flex flex-col gap-5 h-full min-w-[300px] px-5 py-8 bg-white shadow-nav fixed overflow-y-scroll no-scrollbar">
      <Link href={"/"} className="flex gap-5 items-center cursor-pointer px-4">
        <Image src={logo} alt="Logo" width={40} height={40} />

        <div className="font-sora text-black font-semibold text-2xl">
          Next<span className="text-primary font-extrabold">Gen</span>
        </div>
      </Link>

      <hr />

      <NavSection
        sectionName="MAIN"
        tabs={[
          {
            icon: dashboardIcon,
            name: "Dashboard",
          },

          {
            icon: fireIcon,
            name: "Popular Now",
          },
        ]}
      />

      <hr />

      <NavCategoriesSection params={params} setParams={setParams} />

      <hr />

      <NavSection
        sectionName="PERSONAL"
        tabs={[
          {
            icon: subscriptionIcon,
            name: "Subscriptions",
          },
          {
            icon: heartIcon,
            name: "Favorites",
          },
        ]}
      />
    </nav>
  );
};

export default NavBar;
