import { queryOptions } from "@tanstack/react-query";

export class testQueries {
  static getAll() {
    return queryOptions({
      queryKey: ["all"],
      queryFn: async () => await 1,
      initialData: () => 1,
    });
  }
  // static getTestList() {
  //   return queryOptions({
  //     내가 원하는 어떤 옵션값들의 집합
  //   })
  // }
}

export const testQueryKeysFactory = {
  all: () => ["test"],

  test_list: () => [...testQueryKeysFactory.all(), "list"],
  test_list_item: (item: number) => [...testQueryKeysFactory.test_list(), item],
};
