import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import UserAdd from "./pages/UserAdd";
import Dashboard from "./pages/Dashboard";
import UserEdit from "./pages/UserEdit";
import Posts from "./pages/Posts";
import PostAdd from "./pages/PostAdd";

// Layout bileşeni: Navbar, Sidebar ve Footer'ı içerir

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, // Ana sayfa
  },
  {
    path: "/posts",
    element: <Posts />, // posta
  },
  {
    path: "/post/add",
    element: <PostAdd />, // posta ekle
  },

  {
    path: "/users",
    element: <Users />, // Kullanıcılar sayfası
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
    path: "/login",
    element: <Login />, // Giriş sayfası
  },
]);

export default router;
