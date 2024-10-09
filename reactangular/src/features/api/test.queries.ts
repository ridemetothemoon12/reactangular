import { queryOptions, UseMutationOptions } from "@tanstack/react-query";
import Api from "../../shared/api/axios-config";

export class testQueries {
  static getAll() {
    return queryOptions({
      queryKey: ["search"],
      queryFn: () => Api.getInstance().get<{ test: string }>("search"),
      select: (data) => data.test,
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
