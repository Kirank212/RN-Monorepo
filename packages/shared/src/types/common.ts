/**
 * Common type definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

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
