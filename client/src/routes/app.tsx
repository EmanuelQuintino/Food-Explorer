import { Routes, Route } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home"
import { FoodPlateDetails } from "../pages/FoodPlateDetails";
import { NewPlate } from "../pages/NewPlate";
import { useAuth } from "../hooks/auth";
import { EditPlate } from "../pages/EditPlate";

export function AppRoutes() {
  const { userAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<FoodPlateDetails/>} />

        {userAuth.isAdmin && 
          <>
            <Route path='/newplate' element={<NewPlate/>}/>
            <Route path='/editplate/:id' element={<EditPlate/>}/>
          </>
        }
      </Route>
    </Routes>
  )
}