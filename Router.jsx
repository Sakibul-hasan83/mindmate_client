
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./src/App";
import Layout from "./src/Layout";
import Home from "./src/Home";
import Login from "./src/AuthenticationsElements/Login";
import SignUp from "./src/AuthenticationsElements/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>,
      },
    ]
  },
]);

export default router ; 