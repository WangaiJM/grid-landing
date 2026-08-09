import { useState, type PropsWithChildren } from "react";
import { type Nav, NavContext } from "./NavContext/NavContext";

export function NavProvider({ children }: PropsWithChildren) {
  const [active, setActive] = useState<Nav>({ active: false });
  return (
    <NavContext.Provider value={{ active, setActive }}>
      {children}
    </NavContext.Provider>
  );
}
