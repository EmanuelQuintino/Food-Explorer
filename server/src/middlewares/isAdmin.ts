import { Request, Response, NextFunction } from "express";

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("isAdmin");
    next();
    
  } catch (error) {
    
  }
}