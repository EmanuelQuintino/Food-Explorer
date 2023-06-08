import path from "path";
import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

export const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
export const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

export const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(req, file, callback) {
      const fileName = `${new Date().getTime()}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
  fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    if (file.mimetype.startsWith("image/") &&
      (file.originalname.endsWith(".png") || file.originalname.endsWith(".jpg"))
    ) {
      callback(null, true);
    } else {
      callback(null, false);
    };
  }
};