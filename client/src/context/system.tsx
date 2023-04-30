import { PropsWithChildren, createContext, useState } from "react";

type SystemContextType = {
  menuActive: boolean;
  toggleMenu: () => void;
}

export const systemContext = createContext<SystemContextType>({
  menuActive: false,
  toggleMenu: () => {},
});

export function SystemProvider({ children }: PropsWithChildren) {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(menuActive ? false : true);

  return (
    <systemContext.Provider value={{ 
      menuActive, toggleMenu    
    }}>
      {children}
    </systemContext.Provider>
  )
}