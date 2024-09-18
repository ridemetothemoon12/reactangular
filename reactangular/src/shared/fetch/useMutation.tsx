import {
  DataTag,
  useMutation as rawUseMutation,
  UseMutationOptions,
} from "@tanstack/react-query";

export const useMutation = <T, D = T>(
  options: UseMutationOptions<T, Error, D, string[]> & {
    initialData?: unknown;
  } & {
    queryKey: DataTag<string[], T>;
  }
) =>
  rawUseMutation({
    ...options,
  });
