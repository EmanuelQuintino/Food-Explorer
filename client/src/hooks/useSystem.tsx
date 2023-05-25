import { PropsWithChildren, createContext, useState, useContext } from "react";

type PlateOrdersTypes = {
  id: string;
  amount: number;
}

type SystemContextType = {
  orderTotal: number;
  toggleMenu: () => void;
  menuActive: boolean;
  setOrderTotal: React.Dispatch<React.SetStateAction<number>>;
  updateOrderTotal: (userID: string) => void;
}

const SystemContext = createContext<SystemContextType>({} as SystemContextType);

export function SystemProvider({ children }: PropsWithChildren) {
  const [menuActive, setMenuActive] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const toggleMenu = () => setMenuActive(menuActive ? false : true);

  function updateOrderTotal(userID: string) {
    const localStorageUserOrder = localStorage.getItem("@FoodExplorer:order");
    if (localStorageUserOrder) {
      const userOrder = JSON.parse(localStorageUserOrder);
      if (userOrder.userID !== userID) {
        localStorage.removeItem("@FoodExplorer:order");
        setOrderTotal(0);
      } else {
        const amounts = userOrder.plates.map((plate: PlateOrdersTypes) => plate.amount);
        const sumAmounts = amounts.reduce((a: number, b: number) => a + b);
        setOrderTotal(sumAmounts);
      };
    };
  };

  return (
    <SystemContext.Provider value={{
      menuActive, toggleMenu,
      orderTotal, setOrderTotal,
      updateOrderTotal
    }}>
      {children}
    </SystemContext.Provider>
  )
}

export function useSystem() {
  return useContext(SystemContext);
}