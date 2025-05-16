/* global process */
import { createSlice } from '@reduxjs/toolkit'
import { fakeEmployees } from '../data/fakeEmployees'

// Génération automatique seulement en développement
const shouldGenerateFakeEmployees = process.env.NODE_ENV !== 'production'

const initialState = {
  employees: shouldGenerateFakeEmployees ? fakeEmployees : [],
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
