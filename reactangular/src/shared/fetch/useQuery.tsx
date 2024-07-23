import {
  QueryFunctionContext,
  useQuery as rawUseQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQuery = <TData,>({
  options,
  queryFn,
}: {
  options: Omit<UseQueryOptions, "queryKey">;
  queryFn: (context: QueryFunctionContext) => Promise<TData>;
}) =>
  rawUseQuery({
    queryKey: ["test"],
    queryFn: queryFn,
    ...options,
  });
