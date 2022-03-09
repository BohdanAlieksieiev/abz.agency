import React from "react";
import tracesImage from "../../assets/Images/traces.svg";
import classes from "./Traces.module.scss";

const Traces: React.FC = () => {
  return (
    <section className={classes.main}>
      <img className={classes.image} src={tracesImage} alt="tracesImage" />
    </section>
  );
};

export default Traces;
