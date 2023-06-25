export enum ErrorCode {
  InvalidArgument,
  NotFound,
  AlreadyExists,
  Forbidden,
  Unauthorized,
  Internal,
}

export class AppError extends Error {
  public readonly errorCode: ErrorCode;

  constructor(message: string, code: ErrorCode) {
    super(message);
    this.errorCode = code;
  }
}

export function throwInvalidArgumentError(message: string) {
  throw new AppError(message, ErrorCode.InvalidArgument);
}

export function throwNotFoundError(message: string) {
  throw new AppError(message, ErrorCode.NotFound);
}

export function throwAlreadyExistsError(message: string) {
  throw new AppError(message, ErrorCode.AlreadyExists);
}

export function throwForbiddenError(message: string) {
  throw new AppError(message, ErrorCode.Forbidden);
}

export function throwUnauthorizedError(message: string) {
  throw new AppError(message, ErrorCode.Unauthorized);
}

export function throwInternalError(message: string) {
  throw new AppError(message, ErrorCode.Internal);
}