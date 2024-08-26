import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { testQueries, testQueryKeysFactory } from "./features/api/test.queries";
import { queryClient } from "./shared/api/query-client";

import { RouterProvider } from "react-router-dom";
import { router } from "./shared/config/routes";

function App() {
  const { data: test } = useQuery(testQueries.getAll());
  console.log(test);
  queryClient.invalidateQueries({ queryKey: testQueryKeysFactory.all() });

  return <RouterProvider router={router} />;
}

export default App;
