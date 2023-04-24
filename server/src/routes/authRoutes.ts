import { Router } from "express";
import { userControllers } from "../controllers/userControllers";

const authRoutes = Router();

authRoutes.get("/auth", userControllers.read);

export { authRoutes };