import { HeaderContainer } from "./style";
import { MenuOpen } from "../../assets/MenuOpen";
import { MenuClose } from "../../assets/MenuClose";
import { LogoExplorer } from "../../assets/LogoExplorer";
import { OrderIcon } from "../../assets/OrderIcon";
import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";
import { useSystem } from "../../hooks/useSystem";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const { menuActive, toggleMenu } = useSystem();
  const { userAuth } = useAuth();

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
                <button>
                  <OrderIcon />
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