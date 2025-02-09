import React from "react"
import classes from "./Footer.module.css"
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["logo-col"]}>
          <a href="#" className="footer-logo">
            <img src={logo} alt="Logo Dr. Thiago" className={classes["footer-logo"]} />
          </a>
        </div>
        <div className={classes["footer-text"]}>
          <p className={classes["footer-header"]}>
            © 2025 - <strong>Dr. Thiago Brandão</strong> - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
