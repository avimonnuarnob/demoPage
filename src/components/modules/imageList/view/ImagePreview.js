import React, { useState } from "react";
import Switch from "../../../Switch/Switch";
import styles from "../styles/imagePreview.module.css";
import {
  AiOutlineCheck,
  AiOutlineMinusCircle,
  AiOutlineStar,
} from "react-icons/ai";
import {
  BsQuestionSquare,
  BsFillExclamationDiamondFill,
  BsExclamationTriangle,
} from "react-icons/bs";

const ImagePreview = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className={styles.preview__container}>
        <div>
          <div className={styles.head}>
            <h2 style={{ fontWeight: 500 }}>Image Preview</h2>
            <div className={styles.head_btnsContainer}>
              <span className={styles.reportBtn}>
                <BsExclamationTriangle /> Report a problem
              </span>

              <div className={styles.flagBtn}>
                <AiOutlineStar color="#4D4D4D" />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "499px",
              height: "528px",
              backgroundColor: "#F3F3F3",
              border: "1px dashed #B7B7B7",
              borderRadius: "12px",
            }}
          ></div>
        </div>
        <div style={{ flex: 1, paddingInline: "36px" }}>
          <div className={styles.detailsBlock}>
            <dl>
              <dt>Coffee</dt>
              <dd>Black hot drink</dd>
            </dl>
            <dl>
              <dt>Coffee</dt>
              <dd>Black hot drink</dd>
            </dl>
          </div>

          <div className={styles.detailsBlock}>
            <dl>
              <dt>Coffee</dt>
              <dd>Black hot drink</dd>
            </dl>
          </div>
          <div className={styles.detailsBlock}>
            <dl>
              <dt>Coffee</dt>
              <dd>Black hot drink</dd>
            </dl>
          </div>

          <div style={{ marginBlock: "18px" }}>
            <div className={styles.issuesBlock}>
              <p style={{ color: "#858585" }}>Positioning Issues</p>
              <BsFillExclamationDiamondFill color="#858585" />
              <span style={{ color: "#5193F5", marginLeft: "auto" }}>
                Save Changes
              </span>
            </div>

            <div className={styles.issue}>
              <AiOutlineCheck color="#DB2E2E" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Remove
              </span>
            </div>
            <div className={styles.issue}>
              <AiOutlineCheck color="#DB2E2E" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Remove
              </span>
            </div>
            <div className={styles.issue}>
              <AiOutlineCheck color="#DB2E2E" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Remove
              </span>
            </div>

            <div className={styles.issue}>
              <AiOutlineMinusCircle color="#333232" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Add
              </span>
            </div>

            <div className={styles.issue}>
              <AiOutlineMinusCircle color="#333232" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Add
              </span>
            </div>
            <div className={styles.issue}>
              <AiOutlineMinusCircle color="#333232" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Add
              </span>
            </div>
            <div className={styles.issue}>
              <AiOutlineMinusCircle color="#333232" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Add
              </span>
            </div>
            <div className={styles.issue}>
              <AiOutlineMinusCircle color="#333232" />
              <span>Pec muscle not reaches PNL</span>
              <span className={styles.issueBtn} style={{ marginLeft: "auto" }}>
                Add
              </span>
            </div>

            <div className={[styles.issue, styles.issueDisabled].join(" ")}>
              <BsQuestionSquare />
              <span>Pec muscle not reaches PNL</span>
            </div>
            <div className={[styles.issue, styles.issueDisabled].join(" ")}>
              <BsQuestionSquare />
              <span>Pec muscle not reaches PNL</span>
            </div>
            <div className={[styles.issue, styles.issueDisabled].join(" ")}>
              <BsQuestionSquare />
              <span>Pec muscle not reaches PNL</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.switchContainer}>
          <span>Show Priors</span>
          <Switch
            name="hello"
            isChecked={isChecked}
            onChange={() => setIsChecked((state) => !state)}
          />
        </div>
        <span style={{ fontWeight: 500 }}>1 of 25</span>
        <button type="submit" className={styles.footerBtn}>
          Remove from statistics
        </button>
      </div>
    </>
  );
};

export default ImagePreview;
