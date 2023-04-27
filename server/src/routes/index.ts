import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { userRoutes } from "./userRoutes";
import { plateRoutes } from "./plateRoutes";
import { orderRoutes } from "./orderRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(plateRoutes);
routes.use(orderRoutes);

export { routes };
