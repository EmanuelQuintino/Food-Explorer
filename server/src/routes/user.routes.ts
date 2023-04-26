import { Router } from "express";
import { userControllers } from "../controllers/userControllers";
import { authMiddleware } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

const userRoutes = Router();

userRoutes.post("/users", userControllers.create);

userRoutes.use(authMiddleware, isAdmin);

userRoutes.get("/users", userControllers.read);
userRoutes.put("/users", userControllers.update);
userRoutes.delete("/users", userControllers.delete);

export { userRoutes };