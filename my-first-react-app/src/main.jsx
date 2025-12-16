import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import News from './News.jsx'
import AllNews from './AllNews.jsx'
import NewsItems from './NewsItems.jsx'
import InnerAllNews from './InnerAllNews.jsx'
import { Navigate } from "react-router-dom";
import Administration from './Administration.jsx'

const router = createHashRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/noutăți',
    element:<News/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/toate-noutățile',
    element:<AllNews/>,
    children:[
      {
        index: true,
        element: <Navigate to="1" replace/>
      },
      {
        path:':page',
        element:<InnerAllNews/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  {
    path:'/noutăți/:slug',
    element: <NewsItems/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/administrație',
    element:<Administration/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'*',
    element: <App/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
