import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { testQueries, testQueryKeysFactory } from "./features/api/test.queries";
import { queryClient } from "./shared/api/query-client";

function App() {
  const [count, setCount] = useState(0);

  const { data: test } = useQuery(testQueries.getAll());
  console.log(test);
  queryClient.invalidateQueries({ queryKey: testQueryKeysFactory.all() });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
