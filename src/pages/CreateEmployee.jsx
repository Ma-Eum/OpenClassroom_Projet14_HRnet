import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/employeesSlice'
import Modal from 'react-modal-wh-maeum'
import 'react-modal-wh-maeum/dist/style.css'
import Dropdown from '../components/Dropdown/Dropdown'
import DatePicker from '../components/DatePicker/DatePicker'

const departments = ['Marketing', 'Sales', 'Engineering', 'HR']
const states = ['California', 'Texas', 'Florida', 'New York']

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })

  // Chargement depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('employeeForm')
    if (saved) {
      setFormData(JSON.parse(saved))
    }
  }, [])

  // Sauvegarde dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('employeeForm', JSON.stringify(formData))
  }, [formData])

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addEmployee(formData))
    setShowModal(true)
    setFormData({
      firstName: '',
      lastName: '',
      birthDate: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    })
    localStorage.removeItem('employeeForm')
  }

  return (
    <>
      <h2>Créer un employé</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          required
        />
        <DatePicker
          label="Date de naissance"
          name="birth-date"
          value={formData.birthDate}
          onChange={handleChange('birthDate')}
        />
        <DatePicker
          label="Date de début"
          name="start-date"
          value={formData.startDate}
          onChange={handleChange('startDate')}
        />
        <fieldset>
          <legend>Adresse</legend>
          <input
            type="text"
            placeholder="Rue"
            value={formData.street}
            onChange={handleChange('street')}
            required
          />
          <input
            type="text"
            placeholder="Ville"
            value={formData.city}
            onChange={handleChange('city')}
            required
          />
          <Dropdown
            label="État"
            name="state"
            options={states}
            value={formData.state}
            onChange={handleChange('state')}
          />
          <input
            type="text"
            placeholder="Code postal"
            value={formData.zipCode}
            onChange={handleChange('zipCode')}
            required
          />
        </fieldset>
        <Dropdown
          label="Département"
          name="department"
          options={departments}
          value={formData.department}
          onChange={handleChange('department')}
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