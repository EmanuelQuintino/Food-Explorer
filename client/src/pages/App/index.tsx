import { Container } from "./style";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <article className="content">
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </article>
    </Container>
  )
}