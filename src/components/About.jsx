import React from "react";
import classes from "./About.module.css";
import { HiAcademicCap } from "react-icons/hi2";
import aboutImg from "../assets/about-img.png";

function About() {
  return (
    <section className={classes["section-about"]} id="about">
      <div className={classes.about}>
        <h1 className={classes["about-heading"]}>
          {" "}
          <HiAcademicCap />
          <span className={classes["heading-text"]}>Sobre mim</span>
        </h1>
        <div className={classes["about-container"]}>
          <div className={classes["about-img-box"]}>
            <img
              src={aboutImg}
              alt="Foto do Dr. Thiago"
              className={classes["about-img"]}
            ></img>
          </div>
          <div className={classes["about-text-box"]}>
            <h2 className={classes["heading-highlight"]}>
              Psiquiatra em Rio Preto - SP
            </h2>
            <p className={classes["about-description"]}>
              Meu nome é Thiago Queiroz Brandão, me formei em Medicina pela
              Universidade Federal de Uberlândia (UFU) e concluí a residência
              médica em Psiquiatria pela Universidade Federal de Goiás (UFG).
              Desde antes do início dos meus estudos em medicina, sempre tive
              apreço pelo estudo das áreas humanas, como filosofia, história e
              sociologia. Durante a faculdade de medicina, me aproximei da
              especialidade médica mais relacionada a tais temas: a Psiquiatria.
              Então fiz minha residência médica na área e sou a cada dia mais
              apaixonado por ela. Ter a oportunidade de ajudar pessoas em
              sofrimento mental me move a estudar mais a cada dia e me manter
              atualizado. Tenho experiência em emergências psiquiátricas e
              ambulatórios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
