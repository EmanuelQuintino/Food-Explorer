import { Router } from "express";
import { clientControllers } from "../controllers/clientControllers";

const clientRoutes = Router();

clientRoutes.get("/client", clientControllers.read);

export { clientRoutes };