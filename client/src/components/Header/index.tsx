import { HeaderContainer } from "./style";
import menuOpen from "../../assets/menuOpen.svg"
import menuClose from "../../assets/menuClose.svg"
import logoExplorer from "../../assets/logoExplorer.svg"
import orderIcon from "../../assets/order.svg"
import { useState } from "react";
import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";
import { useContext } from "react";
import { systemContext } from "../../context/system";

export function Header() {
  const { menuActive, toggleMenu } = useContext(systemContext);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <HeaderContainer menuActive={menuActive}>
      <div className="boxHeader">
        <button className="toggleMenu" onClick={toggleMenu}>
          {menuActive ?
            <img src={menuClose} className="menuClose" alt="menu-close" /> :
            <img src={menuOpen} className="menuOpen" alt="menu-open" />
          }
        </button>

        {menuActive ?
          <h3>Menu</h3> :
          <>
            <div className="logo">
              <img src={logoExplorer} alt="logo-explorer" />
              <h1>food explorer</h1>
              {isAdmin &&
                <p className="paragraphAdmin">admin</p>
              }
            </div>

            <InputSearch/>

            {!isAdmin &&
              <div className="orderContainer">
                <button>
                  <img src={orderIcon} className="orderIcon" alt="order-icon" />
                </button>
                <div className="orderTotal">0</div>
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