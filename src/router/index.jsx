import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../pages/Home'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // pas de layout
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'create',
        element: <CreateEmployee />,
      },
      {
        path: 'employees',
        element: <EmployeeList />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])