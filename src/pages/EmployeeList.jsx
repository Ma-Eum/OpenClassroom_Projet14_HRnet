import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadEmployees } from '../store/employeesSlice'
import Table from '../components/Table/Table'

export default function EmployeeList() {
  const dispatch = useDispatch()
  const employees = useSelector((state) => state.employees)

  useEffect(() => {
    dispatch(loadEmployees())
  }, [dispatch])

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