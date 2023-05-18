import { Container } from "./style";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>    

      <ToastContainer autoClose={3000} theme={"dark"} />      
      
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer> 
    </Container>
  )
}