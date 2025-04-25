import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Créer
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/employees"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Employés
        </NavLink>
      </nav>
    </header>
  )
}