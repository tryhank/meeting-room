import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/menu/Menu";
import Login from "./pages/user-manage/Login";
import Register from "./pages/user-manage/Register";
import UpdataPassword from "./pages/user-manage/UpdatePassword";
import RoomList from "./pages/room-list/RoomList";
import History from "./pages/history/History";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="home/list" replace />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "list",
        element: <RoomList />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
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
