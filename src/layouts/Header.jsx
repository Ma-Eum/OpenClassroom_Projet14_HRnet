import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav>
        <NavLink to="/">Créer un employé</NavLink>
        <NavLink to="/employees">Liste des employés</NavLink>
      </nav>
    </header>
  )
}