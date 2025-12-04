import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./src/MainLayout/Layout";
import Home from "./src/Home/Home";
import SignUp from "./src/Authentications/SignUp";
import Login from "./src/Authentications/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<h1>Error</h1>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        
    
    ]

  },
]);

export default router ;