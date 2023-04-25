import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { auth } from "../config/auth";

export const authControllers = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userSchema = z.object({
          email: z.string()
            .email("Por favor insira um email válido")
            .max(255, "Campo com tamanho máximo de 255 caracteres"),
          password: z.string()
            .max(255, "Campo com tamanho máximo de 255 caracteres")
        }).strict();

        const { email, password } = userSchema.parse(req.body);

        const user = await prisma.users.findUnique({where: { email: String(email)}});
        if (!user) return res.status(401).json('Email ou Senha inválida');
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json('Email ou Senha inválida');
        
        const token = jwt.sign({
          id: String(user.id)}, 
          String(auth.secret), 
          {expiresIn: String(auth.expiresIn)
        });

        return res.status(200).json(token);
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      next(error);
    }
  }  
}
