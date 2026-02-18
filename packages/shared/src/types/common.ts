/**
 * Common type definitions
 */

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface AppError {
  code: string;
  message: string;
  timestamp: Date;
}
