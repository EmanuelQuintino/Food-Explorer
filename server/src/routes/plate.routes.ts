import { Router } from "express";
import { plateControllers } from "../controllers/plateControllers";
import { authMiddleware } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import multer from "multer";
import { MULTER } from "../configs/upload";

const plateRoutes = Router();
const upload = multer(MULTER);

plateRoutes.use(authMiddleware, isAdmin);

plateRoutes.post("/plates", plateControllers.create);
plateRoutes.get("/plates", plateControllers.read);
plateRoutes.put("/plates/:id", plateControllers.update);
plateRoutes.delete("/plates/:id", plateControllers.delete);
plateRoutes.patch("/plates/image/:id", upload.single("image"), plateControllers.patch);

export { plateRoutes };