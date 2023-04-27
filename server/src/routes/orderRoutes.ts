import { Router } from "express";
import { plateControllers } from "../controllers/plateControllers";
import { authMiddleware } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

const orderRoutes = Router();

orderRoutes.use(authMiddleware);

orderRoutes.post("/orders", plateControllers.create);
orderRoutes.get("/orders", plateControllers.read);
orderRoutes.put("/orders/:id", isAdmin, plateControllers.update);
orderRoutes.delete("/orders/:id", isAdmin, plateControllers.delete);

export { orderRoutes };
