import React from 'react'
import './DatePicker.css'

export default function DatePicker({ label, name, value, onChange }) {
  // Date maximale = aujourd'hui - 16 ans
  const maxDate = new Date()
  maxDate.setFullYear(maxDate.getFullYear() - 16)
  const max = maxDate.toISOString().split('T')[0]

  return (
    <div className="datepicker-wrapper">
      <label htmlFor={name} className="datepicker-label">{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        className="datepicker-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        max={name === 'birth-date' ? max : undefined} // appliquer la limite uniquement sur la date de naissance
        min="1900-01-01"
      />
    </div>
  )
}