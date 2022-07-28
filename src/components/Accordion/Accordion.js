import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ children, selectedDataCount, title }) => {
  const [open, setOpen] = useState(false);

  const UpSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1rem"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  const DownSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1rem"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
  return (
    <div>
      <div
        className={styles.accordion__header}
        onClick={() => setOpen((open) => !open)}
      >
        <div className={styles.accordion__label}>
          <p>{title}</p>
          {selectedDataCount ? (
            <div className={styles.accordion__count}>
              <span>{selectedDataCount}</span>
            </div>
          ) : null}
        </div>
        {open ? <UpSvg /> : <DownSvg />}
      </div>
      <div
        className={[
          styles.accordion__content,
          open ? styles["accordion__content--open"] : null,
        ].join(" ")}
      >
        <div style={{ padding: "0.625rem 0.75rem" }}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
