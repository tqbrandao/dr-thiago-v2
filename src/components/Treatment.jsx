import React from "react";
import { useState } from "react";
import classes from "./Treatment.module.css";
import { FaBriefcaseMedical } from "react-icons/fa";
import diseasesData from "../../data/diseases.json";

function Treatment() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className={classes["section-treatment"]} id={"treatment"}>
      <div className={classes.treatment}>
        <h1 className={classes["treatment-heading"]}>
          {" "}
          <FaBriefcaseMedical />
          Tratamentos
        </h1>
        <div className={classes["accordion-container"]}>
          <div className={classes.accordion}>
            {diseasesData.map((dis, i) => {
              return (
                <div className={classes.item}>
                  <div className={classes.title} onClick={() => toggle(i)}>
                    <h2>{dis.disease}</h2>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div
                    className={
                      selected === i
                        ? `${classes.content} ${classes.show}`
                        : `${classes.content}`
                    }
                  >
                    {dis.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treatment;
