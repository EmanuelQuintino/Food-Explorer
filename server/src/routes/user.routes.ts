import { Router } from "express";
import { userControllers } from "../controllers/userControllers";
import { authMiddleware } from "../middlewares/auth";

const userRoutes = Router();

userRoutes.post("/users", userControllers.create);

userRoutes.use(authMiddleware);

userRoutes.get("/users", userControllers.read);
userRoutes.put("/users", userControllers.update);
userRoutes.delete("/users", userControllers.delete);

export { userRoutes };