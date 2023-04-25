import { Router } from "express";
import { userControllers } from "../controllers/userControllers";

const userRoutes = Router();

userRoutes.post("/users", userControllers.create);

userRoutes.get("/users", userControllers.read);
userRoutes.put("/users/:id", userControllers.update);
userRoutes.delete("/users/:id", userControllers.delete);

export { userRoutes };