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
  expandNavCategories: boolean;
  user: UserData;
  setUser: (data: UserData | null) => void;
  setExpandNav: (expand: boolean) => void;
  setExpandCategories: (expand: boolean) => void;
  mode: "PRODUCT" | "SERVICES";
  setMode: (mode: "PRODUCT" | "SERVICES") => void;
}

export const Context = createContext<ProviderData>({
  mode: "SERVICES",
  expandNavCategories: true,
  expandNav: true,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: function (data: UserData | null): void {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setExpandNav: function (expand: boolean): void {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setExpandCategories: function (expand: boolean): void {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: function (mode: "PRODUCT" | "SERVICES"): void {},
});

export const Provider: React.FC<props> = ({ children }) => {
  const [user, setUser] = useState<UserData>({
    userId: "userId1",
  });
  const [expandNav, setExpandNav] = useState<boolean>(true);
  const [expandNavCategories, setExpandCategories] = useState<boolean>(true);

  const [mode, setMode] = useState<"PRODUCT" | "SERVICES">("SERVICES");

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
        expandNavCategories,
        setExpandCategories(expand) {
          setExpandCategories(expand);
        },
        mode,
        setMode(mode) {
          setMode(mode);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
