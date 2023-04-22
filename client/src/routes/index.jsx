import { createBrowserRouter } from "react-router-dom"
import { appRoutes } from "./app";
import { authRoutes } from "./auth";
// import { PageError } from "../pages/PageError"

const isAuth = true;

export const Routes = createBrowserRouter( 
  isAuth ? appRoutes : authRoutes
);