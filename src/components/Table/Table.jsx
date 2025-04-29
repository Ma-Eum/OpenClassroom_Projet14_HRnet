import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import './Table.css'

export default function Table({ data }) {
  // État pour stocker la recherche
  const [searchText, setSearchText] = useState('')

  // Si aucune donnée n'est disponible
  if (!data?.length) return <p>Aucun employé trouvé.</p>

  // Définir les colonnes automatiquement à partir des clés de données
  const columns = Object.keys(data[0]).map((key) => ({
    name: key
      .replace(/([A-Z])/g, ' $1') // ajoute un espace avant chaque majuscule
      .replace(/^./, (str) => str.toUpperCase()), // première lettre en majuscule
    selector: (row) => row[key],
    sortable: true,
  }))

  // Filtrer les données selon le texte de recherche
  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )

  return (
    <div className="table-container">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />

      {/* Tableau de données */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  )
}