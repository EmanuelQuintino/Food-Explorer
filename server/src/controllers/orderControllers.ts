import { NextFunction, Request, Response } from "express";
import { prisma } from "../databases";
import { z } from "zod";
import { newAppError } from "../utils/newAppError";

export const orderControllers = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userID = req.userID;
      const plates = req.body;

      const user = await prisma.users.findUnique({ where: { id: String(userID) } });
      if (!user) throw newAppError('Usuário não encontrado', 404);

      type Plate = {
        id: string;
      };

      await prisma.orders.create({
        data: {
          users_id: userID,
          order_plates: {
            create: plates.map((plate: Plate) => ({ plate_id: plate.id }))
          }
        }
      });

      return res.status(201).json("Pedido realizado com sucesso");
    } catch (error: any) {
      if (error.code === "P2021") return res.status(500).json("Tabela não encontrada");
      if (error.code === "P2003") return res.status(404).json({ error: "Prato não encontrado" });
      return next(error);
    };
  },

  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.query;
      const userID = req.userID;

      if (id) {
        const order = await prisma.orders.findUnique({
          where: { id: String(id) },
          include: { order_plates: true }
        });
        if (!order) throw newAppError('Pedido não encontrado', 404);
        if (order?.users_id != userID) throw newAppError('Sem autorização para acessar este pedido', 401);

        return res.status(200).json(order);
      } else {
        const orders = await prisma.orders.findMany({
          where: { users_id: userID },
          include: { order_plates: true }
        });
        return res.status(200).json(orders);
      };
    } catch (error: any) {
      if (error.code === "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userSchema = z.object({
        status: z.string()
          .min(3, "Nome com mínimo de 3 caracteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
      }).strict();

      const { id } = req.params;
      const { status } = userSchema.parse(req.body);

      if (!id) throw newAppError("Por favor insirar o ID do pedido", 400);

      const order = await prisma.orders.findUnique({ where: { id: String(id) } });
      if (!order) throw newAppError('Pedido não encontrado', 404);

      await prisma.orders.update({
        data: { status },
        where: { id: String(id) },
      });

      return res.status(200).json("Pedido atualizado com sucesso");
    } catch (error: any) {
      if (error.code === "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const userID = req.userID;

      if (!id) throw newAppError("Por favor insirar o ID do pedido", 400);
      if (!userID) throw newAppError("Por favor insirar o ID do usuário", 400);

      const order = await prisma.orders.findUnique({ where: { id: String(id) } });
      if (!order) throw newAppError('Pedido não encontrado', 404);
      if (order?.users_id != userID) throw newAppError('Sem autorização para deletar este pedido', 401);

      const user = await prisma.users.findUnique({ where: { id: String(userID) } });
      if (!user) throw newAppError('Usuário não encontrado', 404);

      await prisma.orders.delete({ where: { id: String(id) } });

      return res.status(200).json('Pedido deletado com sucesso');
    } catch (error: any) {
      if (error.code === "P2021") return res.status(500).json("Tabela não encontrada");
      if (error.code === "P2003") return res.status(404).json({ error: "Prato não encontrado" });
      return next(error);
    };
  },
}
