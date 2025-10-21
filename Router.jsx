
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./src/App";
import Layout from "./src/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>
  },
]);

export default router ; 