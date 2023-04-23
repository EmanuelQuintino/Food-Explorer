import { Router } from "express";
import { clientControllers } from "../controllers/clientControllers";

const authRoutes = Router();

authRoutes.get("/auth", clientControllers.read);

export { authRoutes };