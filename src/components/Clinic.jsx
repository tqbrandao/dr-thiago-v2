import React from "react";
import classes from "./Clinic.module.css";
import Button from "./UI/Button";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";
import SliderClinic from "./UI/SliderClinic/SliderClinic";

function Clinic() {
  return (
    <section className={classes["section-clinic"]} id={"clinic"}>
      <div className={classes.clinic}>
        <h1 className={classes["clinic-heading"]}>
          {" "}
          <HiOfficeBuilding />
          <span className={classes["heading-text"]}>Nosso espaço</span>
        </h1>
        <div className={classes["clinic-container"]}>
          <div className={classes["clinic-text-box"]}>
            <h2 className={classes["heading-highlight"]}>A clínica</h2>
            <p className={classes["clinic-description"]}>
              Localizado em região privilegiada em São José do Rio Preto,
              próximo ao Plaza Avenida Shopping. Contamos com estacionamento
              próprio, gratuito, com acessibilidade e conforto. Ambiente
              acolhedor, aconchegante, calmo e adequado para realização de
              consultas psiquiátricas. Seja bem vindo!
            </p>
            <a
              href="https://www.google.com.br/maps/place/Dr.+Thiago+Queiroz+Brand%C3%A3o+-+M%C3%A9dico+Psiquiatra/@-20.8305726,-49.388392,17z/data=!3m1!4b1!4m6!3m5!1s0x94bdb33952917ec5:0x2b2f70fb0c449c27!8m2!3d-20.8305726!4d-49.386198!16s%2Fg%2F11pww_5lkz"
              className={classes["address-link"]}
            >
              <HiMapPin />
              Multi Clínica – Av. Romeu Strazzi, 1445, Bairro Jardim Walkíria.
              São José do Rio Preto – São Paulo.
            </a>
            <div className={classes["btn-container"]}>
              <Button className={classes.btn}>Agendar Consulta</Button>
            </div>
          </div>
          <div className={classes["clinic-img-box"]}>
            <SliderClinic />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clinic;
