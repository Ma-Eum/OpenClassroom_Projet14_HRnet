import { createSlice } from '@reduxjs/toolkit'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
      localStorage.setItem('employees', JSON.stringify(state))
    },
    loadEmployees: () => {
      const data = localStorage.getItem('employees')
      return data ? JSON.parse(data) : []
    },
  },
})

export const { addEmployee, loadEmployees } = employeesSlice.actions
export default employeesSlice.reducer