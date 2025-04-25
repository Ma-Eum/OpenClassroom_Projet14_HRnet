import React from 'react'
import './Table.css'

export default function Table({ data }) {
  if (!data?.length) return <p>Aucun employé trouvé.</p>

  const headers = Object.keys(data[0])

  return (
    <table className="employee-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}