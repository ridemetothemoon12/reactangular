declare module "useQuery" {
  import {
    QueryFunction,
    QueryKey,
    UseQueryOptions,
  } from "@tanstack/react-query";
  import { AxiosError, AxiosResponse } from "axios";

  interface useQueryInterface<TData> {
    queryFn: QueryFunction<AxiosResponse>;
    options?: Omit<
      UseQueryOptions<AxiosResponse<TData>, AxiosError, TData>,
      "queryKey" | "queryFn"
    >;
  }
}
