import { useMutation, useQuery } from "@tanstack/react-query";
import {
  testQueries,
  testQueryKeysFactory,
} from "../../features/api/test.queries";
import { queryClient } from "../../shared/api/query-client";
import { useEffect } from "react";

const HomeIndex = () => {
  const { data: test } = useQuery(testQueries.getAll());
  console.log(test);

  queryClient.invalidateQueries({ queryKey: testQueryKeysFactory.all() });

  const testMutations = useMutation(testQueries.postTestList());

  useEffect(() => {
    testMutations.mutate();
  }, []);

  return <div>HomeIndex</div>;
};

export default HomeIndex;
