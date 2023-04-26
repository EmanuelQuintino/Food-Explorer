import { Router } from "express";
import { plateControllers } from "../controllers/plateControllers";
import { authMiddleware } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

const plateRoutes = Router();

plateRoutes.use(authMiddleware, isAdmin);

plateRoutes.post("/plates", plateControllers.create);
plateRoutes.get("/plates", plateControllers.read);
plateRoutes.put("/plates/:id", plateControllers.update);
plateRoutes.delete("/plates/:id", plateControllers.delete);

export { plateRoutes };