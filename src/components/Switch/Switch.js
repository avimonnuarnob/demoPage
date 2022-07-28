import React from "react";
import styles from "./switch.module.css";

const Switch = ({ onChange, isChecked, name }) => {
  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        id={name}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={name} />
    </div>
  );
};

export default Switch;
