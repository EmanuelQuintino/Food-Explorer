import { createContext, useState } from "react";

export const systemContext = createContext();

export function SystemProvider({ children }) {
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