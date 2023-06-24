import 'express-async-errors';
import express from 'express';
import { routes } from './routes.js';
import { errorMiddleware } from './middlewares/error.js';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(errorMiddleware);

app.listen(3000, () => console.log('Server running on port 3000'));
