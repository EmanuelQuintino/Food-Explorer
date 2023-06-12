import { Container } from "./style";
import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useSystem } from "../../hooks/useSystem";
import { useEffect } from "react";

export function App() {
  const { windowWidth, setWindowWidth, setMenuActive } = useSystem();

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (windowWidth > 960) setMenuActive(false);
  }, [windowWidth]);

  return (
    <Container>
      <header>
        {windowWidth > 960 ? <HeaderDesktop /> : <HeaderMobile />}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </Container>
  )
}