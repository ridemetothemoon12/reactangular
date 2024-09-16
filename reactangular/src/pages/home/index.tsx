import { useQuery } from "@tanstack/react-query";
import {
  testQueries,
  testQueryKeysFactory,
} from "../../features/api/test.queries";
import { queryClient } from "../../shared/api/query-client";

const HomeIndex = () => {
  const { data: test } = useQuery(testQueries.getAll());
  console.log(test);

  queryClient.invalidateQueries({ queryKey: testQueryKeysFactory.all() });

  return <div>HomeIndex</div>;
};

export default HomeIndex;
