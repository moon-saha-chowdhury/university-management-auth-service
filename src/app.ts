import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

// app.use('/api/v1/users/', UserRoutes.router);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes.router);

app.use('/api/v1/', routes);

//Handling error

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully');
  // throw new ApiError(400, 'oreeeh Error')
  // throw new Error('oreeeh Error')
  // next('oreh baba error') //Error
});

//global error handler
app.use(globalErrorHandler);

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
