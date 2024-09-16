import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./shared/config/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/api/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
