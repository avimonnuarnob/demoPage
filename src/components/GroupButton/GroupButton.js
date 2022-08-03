import { useState } from "react";
import styles from "./groupButton.module.css";

const GroupButton = ({ buttons, buttonOnClickHandler }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    buttonOnClickHandler(event);
  };

  return (
    <div className={styles.container}>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={
            i === clickedId
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default GroupButton;
