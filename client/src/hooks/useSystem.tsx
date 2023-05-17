import { PropsWithChildren, createContext, useState, useContext } from "react";

type SystemContextType = {
  menuActive: boolean;
  toggleMenu: () => void;
}

const SystemContext = createContext<SystemContextType>({} as SystemContextType);

export function SystemProvider({ children }: PropsWithChildren) {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(menuActive ? false : true);

  return (
    <SystemContext.Provider value={{
      menuActive, toggleMenu
    }}>
      {children}
    </SystemContext.Provider>
  )
}

export function useSystem() {
  return useContext(SystemContext);
}