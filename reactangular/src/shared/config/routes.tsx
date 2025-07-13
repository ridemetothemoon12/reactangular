import { createBrowserRouter } from "react-router-dom";
import HomeIndex from "../../pages/home";
import { QueryClient } from "@tanstack/react-query";
import { loaderFn } from "../../features/api/loader.queries";
import Ant from "../../pages/ant";
import Canvas from "../../pages/canvas";

const queryClient = new QueryClient();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeIndex />,
  },
  {
    path: "/loader_test/:index",
    loader: loaderFn(queryClient),
  },
  {
    path: "/ant",
    element: <Ant />,
  },
  {
    path: "/canvas",
    element: <Canvas />,
  },
]);
