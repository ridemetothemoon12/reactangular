import { useMutation, useQuery } from "@tanstack/react-query";
import {
  testQueries,
  testQueryKeysFactory,
} from "../../features/api/test.queries";
import { queryClient } from "../../shared/api/query-client";
import { useEffect } from "react";
import { useQueryCacheData } from "../../shared/lib/use-query-cache";

const HomeIndex = () => {
  const { data } = useQuery(testQueries.getAll());
  console.log("data", data);

  const test = useQueryCacheData(testQueryKeysFactory.all());

  console.log("test", test?.state.data);

  queryClient.invalidateQueries({ queryKey: testQueryKeysFactory.all() });

  const testMutations = useMutation(testQueries.postTestList());

  useEffect(() => {
    testMutations.mutate();
  }, []);

  return <div>HomeIndex</div>;
};

export default HomeIndex;
