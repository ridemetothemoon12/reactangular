import { QueryClient, queryOptions } from "@tanstack/react-query";
import { ParamParseKey, Params } from "react-router-dom";

type indexArgsType = {
  readonly loaderAll: "/loader_test/:index";
};
// const 로 선언하는 방식도 있음
// const indexArgsType = {
//   loaderAll: "/loader_test/:index",
// } as const;

export class loaderQueries {
  static getLoaderAll(index: string) {
    return queryOptions({
      queryKey: ["all"],
      queryFn: async () => await index,
      initialData: () => index,
    });
  }
}

export const loaderQueryKeysFactory = {
  all: () => ["loader_test"],

  test_list: () => [...loaderQueryKeysFactory.all(), "loader_test_list"],
  test_list_item: (item: number) => [
    ...loaderQueryKeysFactory.test_list(),
    item,
  ],
};

export const loaderFn =
  (queryClient: QueryClient) =>
  async ({
    params,
  }: {
    // 리액트 라우터 돔에서 해당 타입 helper를 통해 params의 args를 반환받을 수 있는 타입 설정이 default로 있다는 사실은 처음 알았다..
    params: Params<ParamParseKey<keyof indexArgsType>>;
    // params: Params<ParamParseKey<typeof indexArgsType>>;
  }) => {
    const query = loaderQueries.getLoaderAll(params.index ?? "");
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
