import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../MainRouter";
import AuthProvider from "./Authentications/AuthProvider"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>   {/*wrap everything */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
