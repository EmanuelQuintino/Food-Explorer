import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";
import { useAuth } from "../hooks/auth";

export function Routes(){ 
  const { userAuth } = useAuth();
  return (
    <BrowserRouter>
      {userAuth.token ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
};