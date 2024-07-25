import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './assets/styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/Errors/ErrorPage.jsx'
import PostsPage from './pages/PostsPage/PostsPage.jsx'
import PersonalProfile from './pages/ProfilePage/PersonalProfile.jsx'
import PublicProfile from './pages/ProfilePage/PublicProfile.jsx'
import WritePostPage from './pages/PostsPage/WritePostPage.jsx'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import SignUpPage from './pages/SignInPage/SignUpPage.jsx'
import ViewPostPage from './pages/PostsPage/ViewPostPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/posts",
    element: <PostsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <PersonalProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile-public",
    element: <PublicProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/posts-create",
    element: <WritePostPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/post-view",
    element: <ViewPostPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
