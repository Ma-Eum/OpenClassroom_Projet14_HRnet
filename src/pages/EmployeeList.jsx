import React from 'react'
import Table from '../components/Table/Table'

const employees = [
  {
    firstName: 'Alice',
    lastName: 'Durand',
    department: 'Marketing',
    state: 'California',
    startDate: '2023-02-01'
  },
  {
    firstName: 'Bob',
    lastName: 'Martin',
    department: 'Engineering',
    state: 'Texas',
    startDate: '2022-07-15'
  }
]


export default function EmployeeList() {
  return (
    <section>
      <h2>Liste des employés</h2>
        <Table data={employees} />
    </section>
  )
}