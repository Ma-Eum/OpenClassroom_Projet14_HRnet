import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Dropdown from '../components/Dropdown/Dropdown'
import DatePicker from '../components/DatePicker/DatePicker'

const departments = ['Marketing', 'Sales', 'Engineering', 'HR']
const states = ['California', 'Texas', 'Florida', 'New York']

export default function CreateEmployee() {
  const [showModal, setShowModal] = useState(false)
  const [department, setDepartment] = useState('')
  const [state, setState] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')

  return (
    <>
      <h2>Créer un employé</h2>

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

      <button onClick={() => setShowModal(true)}>Enregistrer</button>

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