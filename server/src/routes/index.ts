import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { clientRoutes } from "./clientRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(clientRoutes);

export { routes };
