import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
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