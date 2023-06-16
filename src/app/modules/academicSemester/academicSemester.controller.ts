import httpStatus from 'http-status';
import { Response, Request, NextFunction, RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.services';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { IAcademicSemester } from './academicSemester.interface';

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
    sendResponse(res, {
      success: true,
      message: 'Academic semester is created successfully',
      statusCode: httpStatus.OK,
      meta: {
        page: 0,
        limit: 0,
        total: 0,
      },
      data: result,
    });
    next();
  }
);

//get all semester records

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);

    // console.log(paginationOptions);

    const result = await AcademicSemesterService.getAllSemester(
      paginationOptions
    );
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createdSemester,
  getAllSemesters,
};
