import { Routes, Route } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home"
import { FoodPlateDetails } from "../pages/FoodPlateDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<FoodPlateDetails/>} />
      </Route>
    </Routes>
  )
}