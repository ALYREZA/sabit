import "@tanstack/react-query";

type CustomError = {
  error: string;
  error_description: string;
  fields?: Record<string, string>;
};

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: CustomError;
  }
}
