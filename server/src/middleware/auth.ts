import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../config/auth"
import { log } from "console";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const headerToken = req.headers.authorization;
    if (!headerToken) return res.status(401).json('Por favor informar token');

    const token = headerToken.split(' ');
    if (token.length != 2) return res.status(401).json('Token inválido');
    if (!/^Bearer$/i.test(token[0])) return res.status(401).json('Token inválido');
    
    jwt.verify(token[1], String(auth.secret), (error, decoded: any) => {
      if (error) return res.status(401).json('Token inválido');
      console.log(decoded);
      req.userID = decoded.id;
      return next();
    });
  } catch (error) {
    return res.status(401).json('Erro na verificação do token');
  }
}