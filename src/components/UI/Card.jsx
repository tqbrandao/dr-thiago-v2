import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes["card-header"]}>
        <div className={classes["card-img"]}>
          <img src={props.image} alt="Paciente do Dr. Thiago"></img>
        </div>
        <div className={classes["header-details"]}>
          <div className={classes["logo-central"]}>
            <div className={classes["header-name"]}>{props.name}</div>
            <img
              alt="Google Logo"
              className={classes["google-logo"]}
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
            ></img>
          </div>
          <div className={classes["header-date"]}>{props.date}</div>
        </div>
      </div>
      <div className={classes.stars}>
        <img
          alt="Star"
          className={classes.star}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
        ></img>
        <img
          alt="Star"
          className={classes.star}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
        ></img>
        <img
          alt="Star"
          className={classes.star}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
        ></img>
        <img
          alt="Star"
          className={classes.star}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
        ></img>
        <img
          alt="Star"
          className={classes.star}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
        ></img>
      </div>
      <div className={classes["card-text"]}>{props.text}</div>
    </div>
  );
}

export default Card;
