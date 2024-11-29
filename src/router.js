import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Login from "./pages/Login";
import UserAdd from "./pages/users/UserAdd";
import Dashboard from "./pages/Dashboard";
import UserEdit from "./pages/users/UserEdit";
import Posts from "./pages/posts/Posts";
import PostAdd from "./pages/posts/PostAdd";
import PostEdit from "./pages/posts/PostEdit";
import PostText from "./pages/posts/PostText";
import Categories from "./pages/categories/Categories";
import CategoryAdd from "./pages/categories/CategoryAdd";
import CategoryEdit from "./pages/categories/CategoryEdit";

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
    path: "/categories/:id",
    element: <CategoryEdit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
