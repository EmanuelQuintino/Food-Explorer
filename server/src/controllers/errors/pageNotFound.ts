import { Request, Response, NextFunction } from "express";

export function pageNotFoundError(req: Request, res: Response, next: NextFunction) {
  const error: any = new Error('Page not found');
  error.status = 404;
  next(error);
}
