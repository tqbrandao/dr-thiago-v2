import React from "react"
import classes from "./Button.module.css"
// import { FaCalendarPlus } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs"

export default function Button(props) {
  return (
    <a
      // href="https://api.whatsapp.com/send?phone=5517996189285&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20consulta%20com%20Dr.%20Thiago%20Brand%C3%A3o."
      target="_blank"
    >
      <button className={classes.btn} type={props.type || "button"} onClick={props.onClick}>
        {" "}
        {/* <FaCalendarPlus /> */}
        <BsWhatsapp className={classes["whats-logo"]} />
        {props.children}
      </button>
    </a>
  )
}
