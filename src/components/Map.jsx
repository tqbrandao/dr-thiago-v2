import React from "react";
import classes from "./Map.module.css";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

function Map() {
  return (
    <section className={classes["section-map"]} id={"map"}>
      <div className={classes.map}>
        <h1 className={classes["map-heading"]}>
          <HiChatBubbleOvalLeftEllipsis />
          <span className={classes["heading-text"]}>Contato</span>
        </h1>

        <div className={classes.contact}>
          <div className={classes["map-container"]}>
            <h1 className={classes["map-header"]}>Localização:</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.028079110174!2d-49.38877828876647!3d-20.830572580689427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb33952917ec5%3A0x2b2f70fb0c449c27!2sDr.%20Thiago%20Queiroz%20Brand%C3%A3o%20-%20M%C3%A9dico%20Psiquiatra!5e0!3m2!1spt-BR!2sbr!4v1673400989124!5m2!1spt-BR!2sbr"
              width="100%"
              height="70%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={classes["info-container"]}>
            <h1 className={classes["info-header"]}>Informações:</h1>
            <div className={classes["info-inner-container"]}>
              <a
                className={classes["info-links"]}
                href="https://www.google.com.br/maps/place/Dr.+Thiago+Queiroz+Brand%C3%A3o+-+M%C3%A9dico+Psiquiatra/@-20.8305726,-49.388392,17z/data=!3m1!4b1!4m6!3m5!1s0x94bdb33952917ec5:0x2b2f70fb0c449c27!8m2!3d-20.8305726!4d-49.386198!16s%2Fg%2F11pww_5lkz"
              >
                <p className={classes["info-paragraph"]}>
                  <HiMapPin className={classes["map-pin"]} />
                  Multi Clínica – Av. Romeu Strazzi, 1445, Bairro Jardim
                  Walkíria. São José do Rio Preto – São Paulo.
                </p>
              </a>
              <a className={classes["info-links"]} href="tel:+5517996189285">
                <p className={classes["info-paragraph"]}>
                  <HiPhone className={classes["map-phone"]} />
                  (17) 9 9618-9285
                </p>
              </a>
              <a
                className={classes["info-links"]}
                href="mailto:thiago_qb@hotmail.com"
              >
                <p className={classes["info-paragraph"]}>
                  <HiMail className={classes["map-mail"]} />
                  thiago_qb@hotmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
