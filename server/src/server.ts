import express from "express";
import { routes } from "./routes";
import { prisma } from "./database";
import { log } from "console";

const app = express();

app.use(routes);

app.listen(3000, () => console.log("Server is running on port 3000"));

prisma.$connect()
  .then(() => console.log("Database is connected.."))
  .catch((error) => console.error(error));