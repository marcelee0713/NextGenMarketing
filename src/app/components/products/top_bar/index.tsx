import React from "react";
import { UserButton } from "../../services/top_bar/user_button";
import { UserSwitcher } from "../../services/top_bar/user_creator_switcher";
import { Notification } from "../../services/top_bar/notification";
import { SearchInputProducts } from "./search_input";

interface props {
  enableSearchInput?: boolean;
}

export const TopBarProducts: React.FC<props> = ({ enableSearchInput }) => {
  if (enableSearchInput) {
    return (
      <div className="flex w-full h-fit justify-between items-center">
        <SearchInputProducts />
        <div className="flex gap-4 items-center ">
          <UserSwitcher />
          <Notification />
          <UserButton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-fit items-center gap-4 justify-end">
      <UserSwitcher />
      <Notification />
      <UserButton />
    </div>
  );
};
