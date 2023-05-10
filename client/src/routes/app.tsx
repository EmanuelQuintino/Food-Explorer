import { Routes, Route } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home"
import { FoodPlateDetails } from "../pages/FoodPlateDetails";
import { FormPlate } from "../pages/FormPlate";
import { useAuth } from "../hooks/auth";

export function AppRoutes() {
  const { userAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<FoodPlateDetails/>} />

        {userAuth.isAdmin && 
          <>
            <Route path='/newplate' element={<FormPlate/>}/>
            <Route path='/updateplate/:id' element={<FormPlate/>}/>
          </>
        }
      </Route>
    </Routes>
  )
}