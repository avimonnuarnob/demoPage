import { Field, Form, Formik } from "formik";
import "../../../../App.css";
import Tabs from "../../../Tabs/Tabs";

const ImageListFilter = ({ setFilters, setOpenModal }) => {
  return (
    <div style={{ height: "100%" }}>
      <Formik
        initialValues={{
          time_range: "",
          quality: "",
          view: "",
          position_issues: "",
          density: "",
          needs_review: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setFilters(values);
          setSubmitting(false);
          resetForm();
          setOpenModal(false);
        }}
      >
        <Form style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="time_range">
                  <option value="">Time Range</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="quality">
                  <option value="">Quality</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="view">
                  <option value="">View</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="positioning_issues">
                  <option value="">Positioning issues</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="density">
                  <option value="">Density</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Field component="select" name="needs_review">
                  <option value="">Needs Review</option>
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </div>
              {/* <div>
                <label htmlFor="hello2">Hello 2</label>
                <Field name="hello2" type="text" />
              </div> */}

              <div>
                <Tabs tabs={["Site", "Practice", "Region"]}>
                  <div style={{ margin: "1rem 0" }}>
                    <div style={{ marginBottom: "1rem" }}>
                      <Field component="select" name="time_range">
                        <option value="">Time Range</option>
                        <option value="NY">New York</option>
                        <option value="SF">San Francisco</option>
                        <option value="CH">Chicago</option>
                        <option value="OTHER">Other</option>
                      </Field>
                    </div>
                    <div style={{ margin: "1rem 0" }}>
                      <label
                        style={{ marginBottom: "0.5rem", display: "block" }}
                      >
                        Select technologist
                      </label>
                      <Field component="select" name="time_range">
                        <option value="">Time Range</option>
                        <option value="NY">New York</option>
                        <option value="SF">San Francisco</option>
                        <option value="CH">Chicago</option>
                        <option value="OTHER">Other</option>
                      </Field>
                    </div>
                  </div>
                  <p>Hello2</p>
                  <p>Hello3</p>
                </Tabs>
              </div>
            </div>
            <button
              type="submit"
              style={{
                padding: "1rem 0",
                borderRadius: "12px",
                border: 0,
                backgroundColor: "#5193F5",
                color: "#ffffff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Apply Filters
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ImageListFilter;
