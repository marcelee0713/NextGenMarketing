"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type UserData = {
  userId: string;
} | null;

interface props {
  children: ReactNode;
}

export interface ProviderData {
  expandNav: boolean;
  user: UserData;
  setUser: (data: UserData | null) => void;
  setExpandNav: (expand: boolean) => void;
}

export const Context = createContext<ProviderData>({
  expandNav: true,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: function (data: UserData | null): void {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setExpandNav: function (expand: boolean): void {},
});

export const Provider: React.FC<props> = ({ children }) => {
  const [user, setUser] = useState<UserData>({
    userId: "userId1",
  });
  const [expandNav, setExpandNav] = useState<boolean>(true);

  return (
    <Context.Provider
      value={{
        user,
        setUser(data) {
          setUser(data);
        },
        expandNav,
        setExpandNav(expand) {
          setExpandNav(expand);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
