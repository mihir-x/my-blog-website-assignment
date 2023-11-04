import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            index: true,
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router