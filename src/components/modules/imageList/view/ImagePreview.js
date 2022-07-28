import React, { useState } from "react";
import Switch from "../../../Switch/Switch";
import styles from "../styles/imagePreview.module.css";

const ImagePreview = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <h2 style={{ fontWeight: 500 }}>Image Preview</h2>
        <div
          style={{
            width: "499px",
            height: "428px",
            backgroundColor: "#F3F3F3",
            border: "1px dashed #B7B7B7",
            borderRadius: "12px",
          }}
        ></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Show Priors</span>
          <Switch
            name="hello"
            isChecked={isChecked}
            onChange={() => setIsChecked((state) => !state)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ImagePreview;
