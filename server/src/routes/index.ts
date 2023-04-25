import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);

export { routes };
