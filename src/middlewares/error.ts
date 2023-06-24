import { NextFunction, Request, Response } from 'express';
import { AppError } from '../helpers/app-erros.js';
import { mapErrorCodeToStatusCode } from '../helpers/map-app-error-to-rest.js';

export const errorMiddleware = (
  error: Error & Partial<AppError>,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = mapErrorCodeToStatusCode(error.errorCode) ?? 500;
  const message = error.errorCode !== undefined ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message });
};