import React from "react";
import { UserButton } from "../../services/top_bar/user_button";
import { UserSwitcher } from "../../services/top_bar/user_creator_switcher";
import { Notification } from "../../services/top_bar/notification";

export const TopBarProducts = () => {
  return (
    <div className="flex w-full h-fit items-center gap-4 justify-end">
      <UserSwitcher />
      <Notification />
      <UserButton />
    </div>
  );
};
