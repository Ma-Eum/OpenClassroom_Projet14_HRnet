import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'
import { fakeEmployees } from '../data/fakeEmployees' // <--- ajouter cette ligne

const loadEmployees = () => {
  try {
    const data = localStorage.getItem('employees')
    // Si aucun employé n’est trouvé, on utilise les faux
    return data ? JSON.parse(data) : fakeEmployees
  } catch {
    return fakeEmployees
  }
}

const preloadedState = {
  employees: {
    employees: loadEmployees(),
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
    localStorage.setItem('employees', JSON.stringify(state.employees.employees))
  } catch (e) {
    console.error('Erreur lors de la sauvegarde dans localStorage', e)
  }
})