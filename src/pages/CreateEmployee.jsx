import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Dropdown from '../components/Dropdown/Dropdown'

const departments = ['Marketing', 'Sales', 'Engineering', 'HR']
const states = ['California', 'Texas', 'Florida', 'New York']

export default function CreateEmployee() {
  const [showModal, setShowModal] = useState(false)
  const [department, setDepartment] = useState('')
  const [state, setState] = useState('')

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