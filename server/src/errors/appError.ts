import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

interface AppError {
  status: number;
  message: string;
}

export function appError(error: AppError, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ZodError) {
    return res.status(error.status || 400).json({error: JSON.parse(error.message)[0].message});
  };
  return res.status(error.status || 500).json({error: error.message});
}
