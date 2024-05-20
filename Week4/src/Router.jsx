import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/:userId",
    element: <Home />,
  },
  {
    path: "/mypage/:userId",
    element: <MyPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
