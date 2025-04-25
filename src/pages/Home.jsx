import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h2>Bienvenue sur HRnet</h2>
      <p>Gérez facilement les employés de WealthHealth</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/create">
          <button>Créer un employé</button>
        </Link>
        <Link to="/employees" style={{ marginLeft: '1rem' }}>
          <button>Liste des employés</button>
        </Link>
      </div>
    </section>
  )
}