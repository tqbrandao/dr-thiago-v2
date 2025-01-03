import React from "react"
import classes from "./MyWork.module.css"
import { HiBriefcase } from "react-icons/hi2"
import Button from "./UI/Button"
import FormModal from "./Modal/Modal"

function MyWork() {
  return (
    <section className={classes["section-work"]}>
      <div className={classes.work}>
        <h1 className={classes["work-heading"]}>
          {" "}
          <HiBriefcase />
          <span className={classes["heading-text"]}>O que faço</span>
        </h1>
        <p className={classes["work-description"]}>
          A psiquiatria é a especialidade da medicina responsável pelo acompanhamento de pessoas em sofrimento mental. Nós, médicos psiquiatras, passamos por anos de treinamento intensivo para que sejamos capazes de diagnosticar e tratar de forma
          adequada pessoas que necessitem.
        </p>
        <p className={classes["work-description"]}>
          Pessoalmente, acredito numa psiquiatria aprofundada, na qual quero conhecer os pacientes a fundo, para além de sintomas e doenças, e ajudá-los da melhor maneira possível, seja com orientações, indicação de psicoterapia, medicações, quando
          indicadas, e tratamento multidisciplinar.
        </p>

        <div className={classes["btn-container"]}>
          {/* <Button>Agendar Consulta</Button> */}
          <FormModal />
        </div>
      </div>
    </section>
  )
}

export default MyWork
