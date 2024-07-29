import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./assets/styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/Errors/ErrorPage.jsx";
import PostsPage from "./pages/PostsPage/PostsPage.jsx";
import PersonalProfile from "./pages/ProfilePage/PersonalProfile.jsx";
import PublicProfile from "./pages/ProfilePage/PublicProfile.jsx";
import WritePostPage from "./pages/PostsPage/WritePostPage.jsx";
import TravelItenary from "./pages/TravelPage/TravelItenary.jsx";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/posts",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/profile",
    element: <PersonalProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/profile-public",
    element: <PublicProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/post-create",
    element: <WritePostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/travel-itenary",
    element: <TravelItenary />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
