import {
  Query,
  QueryFilters,
  QueryKey,
  useQueryClient,
} from "@tanstack/react-query";

export const useQueryCacheData = <T,>(
  queryKey: QueryKey,
  queryFilter?: QueryFilters
): Query<T> | undefined => {
  const queryClient = useQueryClient();
  const cache = queryClient
    .getQueryCache()
    .find<T>({ queryKey, ...queryFilter });

  return cache;
};
