import { HeaderContainer } from "./style";
import menuOpen from "../../assets/menuOpen.svg"
import menuClose from "../../assets/menuClose.svg"
import logoExplorer from "../../assets/logoExplorer.svg"
import orderIcon from "../../assets/order.svg"
import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";
import { useSystem } from "../../hooks/system";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { menuActive, toggleMenu } = useSystem();
  const { userAuth }  = useAuth();  

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
              {userAuth.isAdmin &&
                <p className="paragraphAdmin">admin</p>
              }
            </div>

            {/* <InputSearch /> */}

            {!userAuth.isAdmin &&
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