import httpStatus from 'http-status';
import { Response, Request, NextFunction, RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.services';

const createdSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Academic semester is created successfully',
    //   data: result,
    // });
    sendReponse(res, {
      success: true,
      message: 'Academic semester is created successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createdSemester,
};
