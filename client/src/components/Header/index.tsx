import { HeaderContainer } from "./style";
import { MenuOpen } from "../../assets/MenuOpen";
import { MenuClose } from "../../assets/MenuClose";
import { LogoExplorer } from "../../assets/LogoExplorer";
import { OrderIcon } from "../../assets/OrderIcon";
// import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";
import { useSystem } from "../../hooks/useSystem";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { menuActive, toggleMenu, orderTotal, updateOrderTotal } = useSystem();
  const { userAuth } = useAuth();
  const navigate = useNavigate();

  function goToShoppingCart() {
    if (location.pathname === "/shoppingcart") return;
    navigate('/shoppingcart');
  };

  useEffect(() => {
    updateOrderTotal(userAuth.id as string);
  }, [])

  return (
    <HeaderContainer menuActive={menuActive}>
      <div className="boxHeader">
        <button className="toggleMenu" onClick={toggleMenu}>
          {menuActive ?
            <MenuClose /> :
            <MenuOpen />
          }
        </button>

        {menuActive ?
          <h3>Menu</h3> :
          <>
            <div className="logo">
              <LogoExplorer />
              <h1>food explorer</h1>
              {userAuth.isAdmin &&
                <p className="paragraphAdmin">admin</p>
              }
            </div>

            {/* <InputSearch /> */}

            {!userAuth.isAdmin &&
              <div className="orderContainer">
                <button onClick={goToShoppingCart}>
                  <OrderIcon />
                  <div className="orderTotal">{orderTotal}</div>
                </button>
              </div>
            }
          </>
        }
      </div>
      {menuActive &&
        <Menu />
      }
    </HeaderContainer>
  )
}