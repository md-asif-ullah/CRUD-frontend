import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import SingIn from "./pages/login/singin.jsx";
import SignUp from "./pages/sing up/SingUp.jsx";
import ProtectedRoutes from "./components/protectedRoutes.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/singup",
    element: <SignUp />,
  },
  {
    path: "/singin",
    element: <SingIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
