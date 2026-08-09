import { createContext } from "react";

export type Nav = {
  active: boolean;
};

export type NavContextType = {
  active: Nav;
  setActive: React.Dispatch<React.SetStateAction<Nav>>;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);
