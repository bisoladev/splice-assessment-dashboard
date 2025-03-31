export type ActionResponse<T> = {
  message: string;
  success: boolean;
  input?: T;
  errors?: Record<string, string> | null;
};
