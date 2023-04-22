import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";
// import { PageError } from "../pages/PageError"

const isAuth = false;

export function Routes(){ 
  return (
    <BrowserRouter>
      {isAuth ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
};