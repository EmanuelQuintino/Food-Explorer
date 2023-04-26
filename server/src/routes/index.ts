import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { plateRoutes } from "./plate.routes";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(plateRoutes);

export { routes };
