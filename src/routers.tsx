import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
