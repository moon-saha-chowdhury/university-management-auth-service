import mongoose from 'mongoose';
import { InGenericErrorMessage } from '../interfaces/error';
import { InGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  error: mongoose.Error.ValidationError
): InGenericErrorResponse => {
  const errors: InGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
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

export default handleValidationError;
