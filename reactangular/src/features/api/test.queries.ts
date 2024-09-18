import { queryOptions, UseMutationOptions } from "@tanstack/react-query";

export class testQueries {
  static getAll() {
    return queryOptions({
      queryKey: ["all"],
      queryFn: async () => await 1,
      initialData: () => 1,
    });
  }

  static postTestList(): UseMutationOptions {
    return {
      mutationFn: async () => await [1, 2, 3, 4, 5, 6, 7],
      onSuccess: () => {
        return console.log("wow");
      },
    };
  }
}

export const testQueryKeysFactory = {
  all: () => ["test"],

  test_list: () => [...testQueryKeysFactory.all(), "list"],
  test_list_item: (item: number) => [...testQueryKeysFactory.test_list(), item],
};
