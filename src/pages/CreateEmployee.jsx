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

  const [errors, setErrors] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem('employeeForm')
    if (saved) {
      setFormData(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('employeeForm', JSON.stringify(formData))
  }, [formData])

  const isLegalAge = (birthDateStr) => {
    if (!birthDateStr) return false
    const birth = new Date(birthDateStr)
    const today = new Date()
    const age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      return age - 1 >= 16
    }
    return age >= 16
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis.'
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis.'
    if (!formData.birthDate) newErrors.birthDate = 'La date de naissance est requise.'
    else if (!isLegalAge(formData.birthDate)) newErrors.birthDate = 'L’âge minimum est 16 ans.'
    if (!formData.startDate) newErrors.startDate = 'La date de début est requise.'
    if (!formData.street.trim()) newErrors.street = 'La rue est requise.'
    if (!formData.city.trim()) newErrors.city = 'La ville est requise.'
    if (!formData.state) newErrors.state = 'L’état est requis.'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Le code postal est requis.'
    if (!formData.department) newErrors.department = 'Le département est requis.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
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
    setErrors({})
  }

  return (
    <>
      <h2>Créer un employé</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          required
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <DatePicker
          label="Date de naissance"
          name="birth-date"
          value={formData.birthDate}
          onChange={handleChange('birthDate')}
        />
        {errors.birthDate && <p className="error">{errors.birthDate}</p>}

        <DatePicker
          label="Date de début"
          name="start-date"
          value={formData.startDate}
          onChange={handleChange('startDate')}
        />
        {errors.startDate && <p className="error">{errors.startDate}</p>}

        <fieldset>
          <legend>Adresse</legend>

          <input
            type="text"
            placeholder="Rue"
            value={formData.street}
            onChange={handleChange('street')}
            required
          />
          {errors.street && <p className="error">{errors.street}</p>}

          <input
            type="text"
            placeholder="Ville"
            value={formData.city}
            onChange={handleChange('city')}
            required
          />
          {errors.city && <p className="error">{errors.city}</p>}

          <Dropdown
            label="État"
            name="state"
            options={states}
            value={formData.state}
            onChange={handleChange('state')}
          />
          {errors.state && <p className="error">{errors.state}</p>}

          <input
            type="text"
            placeholder="Code postal"
            value={formData.zipCode}
            onChange={handleChange('zipCode')}
            required
          />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </fieldset>

        <Dropdown
          label="Département"
          name="department"
          options={departments}
          value={formData.department}
          onChange={handleChange('department')}
        />
        {errors.department && <p className="error">{errors.department}</p>}

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