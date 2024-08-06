import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/Errors/ErrorPage.jsx";
import PostsPage from "./pages/User/PostsPage/PostsPage.jsx";
import PersonalProfile from "./pages/User/ProfilePage/PersonalProfile.jsx";
import PublicProfile from "./pages/User/ProfilePage/PublicProfile.jsx";
import WritePostPage from "./pages/User/PostsPage/WritePostPage.jsx";
import SignInPage from "./pages/User/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/User/SignInPage/SignUpPage.jsx";
import ViewPostPage from "./pages/User/PostsPage/ViewPostPage.jsx";
import BlogPage from "./pages/Admin/BlogPage/BlogPage.jsx";
import WriteBlogPage from "./pages/Admin/BlogPage/WriteBlogPage.jsx";
import MapPage from "./pages/User/TravelPage/MapPage.jsx";
import TravelItenary from "./pages/TravelPage/TravelItenary.jsx";
import ViewStaffPage from "./pages/Admin/StaffPage/ViewStaffPage.jsx";
import ViewUserGuide from "./pages/Admin/UserGuidePage/ViewUserGuide.jsx";
import CreateUserGuide from "./pages/Admin/UserGuidePage/CreateUserGuide.jsx";

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
    path: "/user/travel-itenary",
    element: <TravelItenary />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/post-view",
    element: <ViewPostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/map-view",
    element: <MapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-users",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-bans",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-accounts",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-posts",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/blogs",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/blog-view",
    element: <PublicProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/blog-create",
    element: <WriteBlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/staff-view",
    element: <ViewStaffPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/staff-create",
    element: <ViewPostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/user-guide",
    element: <ViewUserGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/user-guide-create",
    element: <CreateUserGuide />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
