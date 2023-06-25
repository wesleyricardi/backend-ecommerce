import { Router, Request, Response } from 'express';
import { throwUnauthorizedError } from './helpers/app-error.js';

export const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' });
});

routes.post('/', async (req: Request, res: Response) => {
  req.headers.authorization ?? throwUnauthorizedError('Missing authorization');

  res.status(200).json({ message: 'Hello, World!' });
});