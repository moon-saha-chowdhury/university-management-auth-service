import { InGenericErrorMessage } from './error';

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
export type InGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: InGenericErrorMessage[];
};
