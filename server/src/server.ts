import express from "express";
import { routes } from "./routes";
import { prisma } from "./database";
import "express-async-errors";
import { pageNotFoundError } from "./controllers/errors/pageNotFound";
import { appError } from "./controllers/errors/appError";
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log("Server is running on port 3000"));
dotenv.config();

app.use(pageNotFoundError);
app.use(appError);

prisma.$connect()
  .then(() => console.log("Database is connected.."))
  .catch((error) => console.error(error));