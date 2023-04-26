import fs from "fs";
import path from "path";
import { TMP_FOLDER, UPLOADS_FOLDER } from "../configs/upload";

export const diskStorage = {
  saveFile: async (file: any) => {
    try {
      await fs.promises.rename(
        path.resolve(TMP_FOLDER, file),
        path.resolve(UPLOADS_FOLDER, file),
      );
      return file;
    } catch (error) {
      return;
    };
  },

  deleteFile: async (file: any) => {
    try {
      const filePath = path.resolve(UPLOADS_FOLDER, file);
      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);
    } catch (error) {
      return;
    };
  },
};