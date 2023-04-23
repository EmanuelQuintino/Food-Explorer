import express from "express";
import { routes } from "./routes";
import { prisma } from "./database";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(routes);
app.listen(3000, () => console.log("Server is running on port 3000"));

app.use((req, res, next: NextFunction) => {
  const error = new Error('Page not found');
  error.status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({error: error.message});
});

prisma.$connect()
  .then(() => console.log("Database is connected.."))
  .catch((error) => console.error(error));