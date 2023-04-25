import express from "express";
import { routes } from "./routes";
import { prisma } from "./database";
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log("Server is running on port 3000"));
dotenv.config();

app.use((req, res, next: NextFunction) => {
  const error: any = new Error('Page not found');
  error.status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(error.status || 500).json({error: error.message});
  // return res.status(error.status || 500).json(JSON.parse(error.message)[0].message);
});

prisma.$connect()
  .then(() => console.log("Database is connected.."))
  .catch((error) => console.error(error));