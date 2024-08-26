import {
  DataTag,
  useQuery as rawUseQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQuery = <T, D = T>(
  options: UseQueryOptions<T, Error, D, string[]> & {
    initialData?: undefined;
  } & {
    queryKey: DataTag<string[], T>;
  }
) =>
  rawUseQuery({
    ...options,
  });
