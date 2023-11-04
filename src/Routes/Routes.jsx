import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>
        }
      ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    }
  ]);

export default router