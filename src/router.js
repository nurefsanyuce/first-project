import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import UserAdd from "./pages/UserAdd";
import Dashboard from "./pages/Dashboard";
import UserEdit from "./pages/UserEdit";
import Posts from "./pages/Posts";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";
import PostText from "./pages/PostText";
import Categories from "./pages/Categories";
import CategoryAdd from "./pages/CategoryAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/post/add",
    element: <PostAdd />,
  },

  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/add",
    element: <UserAdd />,
  },
  {
    path: "/users/:id",
    element: <UserEdit />,
  },
  {
    path: "/posts/:id",
    element: <PostEdit />,
  },
  {
    path: "/posts/:id/text",
    element: <PostText />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/category/add",
    element: <CategoryAdd />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
