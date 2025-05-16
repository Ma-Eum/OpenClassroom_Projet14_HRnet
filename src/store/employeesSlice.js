import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [], // le store injectera le bon contenu via preloadedState
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