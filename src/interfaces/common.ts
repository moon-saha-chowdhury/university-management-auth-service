import { InGenericErrorMessage } from './error';
export type InGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: InGenericErrorMessage[];
};
