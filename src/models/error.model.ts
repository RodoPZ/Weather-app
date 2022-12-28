export interface Error {
  error: ErrorClass;
}

export interface ErrorClass {
  code: number;
  message: string;
}
