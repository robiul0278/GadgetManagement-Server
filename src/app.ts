import cors from 'cors';
import config from './app/config';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running on port ' + config.port);
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
