import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { PageError } from "../pages/PageError"

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}