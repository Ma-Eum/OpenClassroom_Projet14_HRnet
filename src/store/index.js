// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'

const loadEmployees = () => {
  try {
    const data = localStorage.getItem('employees')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const preloadedState = {
  employees: {
    employees: loadEmployees(), // <- clé adaptée à ton slice
  },
}

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState,
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(
      'employees',
      JSON.stringify(state.employees.employees)
    )
  } catch (e) {
    console.error('Erreur lors de la sauvegarde dans localStorage', e)
  }
})