import React from 'react'
import './Dropdown.css'

export default function Dropdown({ label, name, options, value, onChange }) {
  return (
    <div className="dropdown-wrapper">
      <label htmlFor={name} className="dropdown-label">{label}</label>
      <select
        id={name}
        name={name}
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Choisir --</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}