import { HeaderContainer } from "./style";
import menuOpen from "../../assets/menuOpen.svg"
import menuClose from "../../assets/menuClose.svg"
import logoExplorer from "../../assets/logoExplorer.svg"
import saleIcon from "../../assets/saleIcon.svg"
import { useState } from "react";

export function HeaderMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(menuActive ? false : true);

  return (
    <HeaderContainer>
      <button className="toggleMenu" onClick={toggleMenu}>
        {menuActive ?
          <img src={menuClose} className="menuClose" alt="menu-close" /> :
          <img src={menuOpen} className="menuOpen" alt="menu-open" />
        }
      </button>

      <div className="logo">
        <img src={logoExplorer} alt="logo-explorer" />
        <h1>food explorer</h1>
      </div>

      <div className="saleContainer">
        <img src={saleIcon} className="saleIcon" alt="sale-icon" />
        <div className="saleTotal">0</div>
      </div>
    </HeaderContainer>
  )
}