import { Router } from "express";
import { clientControllers } from "../controllers/clientControllers";

const clientRoutes = Router();

clientRoutes.post("/client", clientControllers.create);

clientRoutes.get("/client", clientControllers.read);
clientRoutes.put("/client/:id", clientControllers.update);
clientRoutes.delete("/client/:id", clientControllers.delete);

export { clientRoutes };