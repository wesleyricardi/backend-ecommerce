import { ErrorCode } from './app-error.js';

export function mapErrorCodeToStatusCode(errorCode: ErrorCode) {
  switch (errorCode) {
    case ErrorCode.InvalidArgument:
      return 400;
    case ErrorCode.NotFound:
      return 204;
    case ErrorCode.AlreadyExists:
      return 409;
    case ErrorCode.Forbidden:
      return 403;
    case ErrorCode.Unauthorized:
      return 401;
    case ErrorCode.Internal:
      return 500;
    default:
      return 500;
  }
}