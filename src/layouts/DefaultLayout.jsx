import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <header>
        <h1>HRnet</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 WealthHealth</p>
      </footer>
    </>
  )
}