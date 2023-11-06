import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddBlog from "../Pages/AddBlog/AddBlog";
import PrivateRoute from "./PrivateRoute";
import AllBlog from "../Pages/AllBlog/AllBlog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import Wishlist from "../Pages/Wishlist/Wishlist";
import FeaturedBlog from "../Pages/FeaturedBlog/FeaturedBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: 'addblog',
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: 'allblogs',
          element: <AllBlog></AllBlog>
        },
        {
          path: 'allblogs/:id',
          element: <BlogDetails></BlogDetails>
        },
        {
          path: 'updateblog/:id',
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>
        },
        {
          path: 'wishlist',
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
        },
        {
          path: 'featuredblogs',
          element: <FeaturedBlog></FeaturedBlog>
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