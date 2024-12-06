/* eslint-disable*/

import { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext(null);

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => useContext(ActiveSectionContext);
