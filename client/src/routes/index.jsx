import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";

const isAuth = true;

export function Routes(){ 
  return (
    <BrowserRouter>
      {isAuth ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
};