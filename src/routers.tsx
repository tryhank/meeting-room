import { createBrowserRouter, Navigate } from "react-router-dom";
import SiderMenu from "./pages/menu/Menu";
import Login from "./pages/user-manage/Login";
import Register from "./pages/user-manage/Register";
import UpdataPassword from "./pages/user-manage/UpdatePassword";

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to="home" replace />
  },
  {
    path: "/home",
    element: <SiderMenu />,
  },
  {
    path: "userinfo/*",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "updatepassword",
        element: <UpdataPassword />,
      },
    ],
  },
]);

export default router;
