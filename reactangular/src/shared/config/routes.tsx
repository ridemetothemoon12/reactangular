import { createBrowserRouter } from "react-router-dom";
import HomeIndex from "../../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeIndex />,
  },
]);
