import { useState } from "react"
import Modal from "react-modal"
import Button from "../UI/Button"
import classes from "./Modal.module.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
}

Modal.setAppElement("#root")

const Form = ({ onCloseModal }) => {
  const [submit, setSubmit] = useState(false)
  const [formData, setFormData] = useState({
    "entry.2049192406": "",
    "entry.597452581": ""
  })

  const sanitizeInput = (value) => {
    return value.replace(/[<>/|\\]/g, "")
  }

  const handleInputData = (input) => (e) => {
    const sanitizedValue = sanitizeInput(e.target.value)

    setFormData((prevState) => ({
      ...prevState,
      [input]: sanitizedValue
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmit(true)
    onCloseModal()
    window.open("https://api.whatsapp.com/send?phone=5517981547840&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20consulta%20com%20Dr.%20Thiago%20Brand%C3%A3o.", "_blank")

    // let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSepPWp-3JllDNp7tu6Yxt3bEWTZP0fvKR21fIlHYl4ZU7sJEQ/formResponse?entry.1369649213=${formData["entry.1369649213"]}&entry.322769045=${formData["entry.322769045"]}`
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScFTdwglt5c2BpyMZgXPnozgJSlwuNlAZSa21fYtcWh3dmc0A/formResponse?entry.2049192406=${formData["entry.2049192406"]}&entry.597452581=${formData["entry.597452581"]}`

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  }

  return (
    <div className={classes.formWrapper}>
      <div>Preencha os campos abaixo para iniciar uma conversa no WhatsApp.</div>

      <div>
        <form onSubmit={handleSubmit} target="_self">
          <div className={classes.inputBox}>
            <input required placeholder="Seu nome" type="text" name="entry.2049192406" onChange={handleInputData("entry.2049192406")} value={formData["entry.2049192406"]} autoComplete={false} />

            <input required placeholder="(DDD) + Número" type="tel" name="entry.597452581" onChange={handleInputData("entry.597452581")} value={formData["entry.597452581"]} autoComplete={false} />
          </div>
          <div className={classes.btnBox}>
            <button type="submit" className={classes.modalBtn}>
              Iniciar conversa
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function FormModal() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={openModal}>Agendar Consulta</Button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName={classes.darkOverlay}
        className={classes.modal}
      >
        <Form onCloseModal={closeModal} />
      </Modal>
    </div>
  )
}

export default FormModal
