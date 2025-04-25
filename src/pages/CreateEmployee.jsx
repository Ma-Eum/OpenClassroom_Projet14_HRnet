import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'

export default function CreateEmployee() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <h2>Créer un employé</h2>
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