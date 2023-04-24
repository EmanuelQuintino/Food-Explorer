import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { z } from "zod";

export const clientControllers = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const clientSchema = z.object({
          name: z.string()
            .min(3, "Nome com mínimo de 3 caracteres")
            .max(255, "Campo com tamanho máximo de 255 caracteres"),
          email: z.string()
            .email("Por favor insira um email válido")
            .max(255, "Campo com tamanho máximo de 255 caracteres"),
          password: z.string()
            .min(6, "Senha com mínimo de 6 carácteres")
            .max(255, "Campo com tamanho máximo de 255 caracteres")
        }).strict();

        const { name, email, password } = clientSchema.parse(req.body);

        const clientEmail = await prisma.clients.findUnique({where: { email: String(email)}});
        if (clientEmail) return res.status(400).json('Email já cadastrado');
        
        await prisma.clients.create({data: { name, email, password }})
        return res.status(201).json("Cliente cadastrado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },

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
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;      
      const { name, email, password } = req.body;

      if (!id) return res.status(400).json("Por favor insirar o ID do cliente");

      const client = await prisma.clients.findUnique({where: { id: String(id)}});
      if (!client) return res.status(400).json('Cliente não encontrado');

      const clientEmail = await prisma.clients.findUnique({where: { email: String(email)}});
      if (clientEmail && (client.email != clientEmail.email)){
        return res.status(400).json('Email já cadastrado');  
      }
      
      await prisma.clients.update({
        data: { name, email, password },
        where: { id: String(id)}
      });
      return res.status(201).json("Cliente atualizado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);      
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;   
      if (!id) return res.status(400).json("Por favor insirar o ID do cliente");

      const client = await prisma.clients.findUnique({where: { id: String(id)}});
      if (!client) return res.status(400).json('Cliente não encontrado');

      await prisma.clients.delete({where: { id: String(id)}});
      return res.status(200).json('Cliente deletado com sucesso');
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },
}