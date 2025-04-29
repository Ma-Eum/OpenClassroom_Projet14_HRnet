import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../components/Table/Table'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees)

  return (
    <section>
      <h2>Liste des employés</h2>
      {employees.length > 0 ? (
        <Table data={employees} />
      ) : (
        <p>Aucun employé enregistré pour l’instant.</p>
      )}
    </section>
  )
}