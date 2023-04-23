import { Router } from "express";
import { authControllers } from "../controllers//authControllers";

const authRoutes = Router();

authRoutes.get("/", authControllers.read);

export { authRoutes };