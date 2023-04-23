import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { log } from "console";

export const clientControllers = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.query;      
      if (id) {
        const client = await prisma.clients.findUnique({where: { id: String(id)}});
        if (!client) return res.status(400).json('Cliente não encontrado');
        return res.status(200).json({client});
      } else {
        const clients = await prisma.clients.findMany();
        return res.status(200).json({clients});
      }
    } catch (error) {
      // if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  }
}
