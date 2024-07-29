import {
  DataTag,
  useQuery as rawUseQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQuery = <T,>(
  options: UseQueryOptions<T, Error, T, string[]> & {
    initialData?: undefined;
  } & {
    queryKey: DataTag<string[], T>;
  }
) =>
  rawUseQuery({
    ...options,
  });
