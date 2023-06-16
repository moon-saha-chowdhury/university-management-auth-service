import { ZodError, ZodIssue } from 'zod';
import { InGenericErrorResponse } from '../interfaces/common';
import { InGenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): InGenericErrorResponse => {
  const errors: InGenericErrorMessage[] = error.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1], //issue.path.length-1 mean path array er last element
        message: issue?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;
