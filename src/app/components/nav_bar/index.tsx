import Link from "next/link";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import logo from "../../../../public/images/logo.png";
import dashboardIcon from "../../../../public/svg/dashboard-svgrepo-com.svg";
import fireIcon from "../../../../public/svg/fire.svg";
import heartIcon from "../../../../public/svg/heart.svg";
import checklist from "../../../../public/images/checklist.png";
import subscriptionIcon from "../../../../public/svg/subscription.svg";
import { NavSection } from "./section";
import { NavCategoriesSection } from "./section/categories_section";
import { GetServicesParams } from "@/interfaces/services/data_access";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGlobalContext } from "../context";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

const NavBar = ({ params, setParams }: props) => {
  const { expandNav, setExpandNav } = useGlobalContext();
  const [expand, setExpand] = useState(expandNav);

  useEffect(() => {
    setExpandNav(expand);
  }, [expand]);

  return (
    <nav
      className={`flex flex-col gap-5 h-auto  ${
        !expand ? "w-[100px]" : "w-[300px]"
      } px-5 py-8 bg-white shadow-nav overflow-visible`}
    >
      <div className="relative px-4">
        <Link href={"/"} className="flex gap-5 items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />

          {expand && (
            <div className="font-sora text-black font-semibold text-2xl">
              Next<span className="text-primary font-extrabold">Gen</span>
            </div>
          )}
        </Link>

        <div
          onClick={() => setExpand(!expand)}
          className="absolute h-5 w-5 rounded-md shadow-md hover:shadow- flex items-center justify-center -bottom-[30px] -right-7 cursor-pointer bg-white"
        >
          {expand ? (
            <IoIosArrowBack size={15} className="text-textColor" />
          ) : (
            <IoIosArrowForward size={15} className="text-textColor" />
          )}
        </div>
      </div>

      <div className="flex flex-col overflow-hidden no-scrollbar gap-5 h-full">
        <hr />

        <NavSection
          sectionName="MAIN"
          expanded={expand}
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

        <NavCategoriesSection
          expandedNav={expand}
          setExpandedNav={setExpand}
          params={params}
          setParams={setParams}
        />

        <hr />

        <NavSection
          sectionName="PERSONAL"
          expanded={expand}
          tabs={[
            {
              icon: checklist,
              name: "Orders",
            },
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
      </div>
    </nav>
  );
};

export default NavBar;
