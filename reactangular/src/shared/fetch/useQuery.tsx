import { QueryKey, useQuery as rawUseQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useQueryInterface } from "useQuery";

export const useQuery = <TData,>({
  options,
  queryFn,
}: useQueryInterface<TData>) =>
  rawUseQuery<AxiosResponse<TData>, AxiosError, TData, QueryKey>({
    queryKey: ["test"],
    queryFn: queryFn,
    select: ({ data }) => data,
    ...options,
  });
