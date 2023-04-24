import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { z } from "zod";
import bcrypt from "bcrypt";
import { excludeFields } from "../utils/excludeFields";

export const userControllers = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userSchema = z.object({
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

        const { name, email, password } = userSchema.parse(req.body);

        const userEmail = await prisma.users.findUnique({where: { email: String(email)}});
        if (userEmail) return res.status(409).json('Email já cadastrado');

        const passwordHash = await bcrypt.hash(password, 10);
        await prisma.users.create({data: { name, email, password: passwordHash }});

        return res.status(201).json("Usuário cadastrado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },

  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.query;      
      if (id) {
        const user = await prisma.users.findUnique({where: { id: String(id)}});
        if (!user) return res.status(400).json('Usuário não encontrado');
      
        return res.status(200).json(excludeFields(user, ["password", "is_admin"]));
      } else {
        const users = await prisma.users.findMany();
        
        const usersExcludeFields = users.map((user) => {
          return excludeFields(user, ["password", "is_admin"]);
        });
        
        return res.status(200).json(usersExcludeFields);
      }
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userSchema = z.object({
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

      const { id } = req.params;      
      const { name, email, password } = userSchema.parse(req.body);

      if (!id) return res.status(400).json("Por favor insirar o ID do usuário");

      const user = await prisma.users.findUnique({where: { id: String(id)}});
      if (!user) return res.status(400).json('Usuário não encontrado');

      const userEmail = await prisma.users.findUnique({where: { email: String(email)}});
      if (userEmail && (user.email != userEmail.email)){
        return res.status(409).json('Email já cadastrado');  
      }
      
      const passwordHash = await bcrypt.hash(password, 10);
      await prisma.users.update({
        data: { name, email, password: passwordHash },
        where: { id: String(id)}
      });

      return res.status(200).json("Usuário atualizado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);      
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;   
      if (!id) return res.status(400).json("Por favor insirar o ID do usuário");

      const user = await prisma.users.findUnique({where: { id: String(id)}});
      if (!user) return res.status(400).json('Usuário não encontrado');

      await prisma.users.delete({where: { id: String(id)}});
      
      return res.status(200).json('Usuário deletado com sucesso');
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  },
}
