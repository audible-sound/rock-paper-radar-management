import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './assets/styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Errors/ErrorPage.jsx'
import PostsPage from './pages/PostsPage/PostsPage.jsx'
import PersonalProfile from './pages/ProfilePage/PersonalProfile.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
