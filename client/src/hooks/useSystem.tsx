import { PropsWithChildren, createContext, useState, useContext } from "react";

type SystemContextType = {
  orderTotal: number;
  toggleMenu: () => void;
  menuActive: boolean;
  setOrderTotal: React.Dispatch<React.SetStateAction<number>>
}

const SystemContext = createContext<SystemContextType>({} as SystemContextType);

export function SystemProvider({ children }: PropsWithChildren) {
  const [menuActive, setMenuActive] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  
  const toggleMenu = () => setMenuActive(menuActive ? false : true);

  return (
    <SystemContext.Provider value={{
      menuActive, toggleMenu,
      orderTotal, setOrderTotal
    }}>
      {children}
    </SystemContext.Provider>
  )
}

export function useSystem() {
  return useContext(SystemContext);
}