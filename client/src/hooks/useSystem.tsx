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
  removeOrderPlate: (userID: string) => void;
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
      if (userOrder.userID !== userID || userOrder.plates.length === 0) {
        localStorage.removeItem("@FoodExplorer:order");
        setOrderTotal(0);
      } else {
        const amounts = userOrder.plates.map((plate: PlateOrdersTypes) => plate.amount);
        const sumAmounts = amounts.reduce((a: number, b: number) => a + b);
        setOrderTotal(sumAmounts);
      };
    };
  };

  function removeOrderPlate(plateID: string) {
    const localStorageUserOrder = localStorage.getItem("@FoodExplorer:order");
    if (localStorageUserOrder) {
      const userOrder = JSON.parse(localStorageUserOrder);
      const newUserOrder = {
        userID: userOrder.userID,
        plates: userOrder.plates.filter((plate: PlateOrdersTypes) => plate.id !== plateID)
      }

      localStorage.setItem("@FoodExplorer:order", JSON.stringify(newUserOrder));
      updateOrderTotal(newUserOrder.userID)
    }
  }

  return (
    <SystemContext.Provider value={{
      menuActive, toggleMenu,
      orderTotal, setOrderTotal,
      updateOrderTotal,
      removeOrderPlate
    }}>
      {children}
    </SystemContext.Provider>
  )
}

export function useSystem() {
  return useContext(SystemContext);
}