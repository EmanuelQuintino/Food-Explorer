import { Router } from "express";
import { authControllers } from "../controllers/authControllers";

const authRoutes = Router();

authRoutes.post("/auth", authControllers.login);

export { authRoutes };