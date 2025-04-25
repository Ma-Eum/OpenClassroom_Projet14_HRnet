import React from 'react'
import './DatePicker.css'

export default function DatePicker({ label, name, value, onChange }) {
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
      />
    </div>
  )
}