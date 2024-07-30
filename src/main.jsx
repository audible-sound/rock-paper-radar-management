import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from './components/Errors/ErrorPage.jsx'
import PostsPage from './pages/User/PostsPage/PostsPage.jsx'
import PersonalProfile from './pages/User/ProfilePage/PersonalProfile.jsx'
import PublicProfile from './pages/User/ProfilePage/PublicProfile.jsx'
import WritePostPage from './pages/User/PostsPage/WritePostPage.jsx'
import SignInPage from './pages/User/SignInPage/SignInPage.jsx'
import SignUpPage from './pages/User/SignInPage/SignUpPage.jsx'
import ViewPostPage from './pages/User/PostsPage/ViewPostPage.jsx'
import BlogPage from './pages/Admin/BlogPage/BlogPage.jsx'
import WriteBlogPage from './pages/Admin/BlogPage/WriteBlogPage.jsx'
import MapPage from './pages/User/TravelPage/MapPage.jsx'
import TravelItenary from "./pages/TravelPage/TravelItenary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
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
