import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/employeesSlice'
import Modal from '../components/Modal/Modal'
import Dropdown from '../components/Dropdown/Dropdown'
import DatePicker from '../components/DatePicker/DatePicker'

const departments = ['Marketing', 'Sales', 'Engineering', 'HR']
const states = ['California', 'Texas', 'Florida', 'New York']

export default function CreateEmployee() {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [department, setDepartment] = useState('')
  const [state, setState] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      firstName,
      lastName,
      department,
      state,
      birthDate,
      startDate,
    }
    dispatch(addEmployee(newEmployee))
    setShowModal(true)
  }

  return (
    <>
      <h2>Créer un employé</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <Dropdown
          label="Département"
          name="department"
          options={departments}
          value={department}
          onChange={setDepartment}
        />

        <Dropdown
          label="État"
          name="state"
          options={states}
          value={state}
          onChange={setState}
        />

        <DatePicker
          label="Date de naissance"
          name="birth-date"
          value={birthDate}
          onChange={setBirthDate}
        />

        <DatePicker
          label="Date de début"
          name="start-date"
          value={startDate}
          onChange={setStartDate}
        />

        <button type="submit">Enregistrer</button>
      </form>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Employé créé"
      >
        <p>L'employé a bien été enregistré !</p>
      </Modal>
    </>
  )
}