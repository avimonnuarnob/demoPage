import React from "react";
import { Portal } from "../Portal";
import styles from "./previewModal.module.css";

const CloseButtonSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    stroke="#0B0B0B"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const PreviewModal = ({ setIsOpen, children }) => {
  return (
    <>
      <Portal>
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <CloseButtonSVG />
            </button>
            <div className={styles.modalContent}>{children}</div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default PreviewModal;
