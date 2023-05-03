import { Routes, Route } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}