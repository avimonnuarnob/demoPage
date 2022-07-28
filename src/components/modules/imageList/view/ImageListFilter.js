import { Field, Form, Formik } from "formik";
import "../../../../App.css";
import Accordion from "../../../Accordion/Accordion";
import Tabs from "../../../Tabs/Tabs";

const ImageListFilter = ({ setFilters, setOpenModal }) => {
  return (
    <div style={{ height: "100%" }}>
      <Formik
        initialValues={{
          time_range: [],
          quality: [],
          view: [],
          position_issues: [],
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const filteredFields = {
            time_range: values?.time_range?.length ?? undefined,
            quality: values?.quality?.length ?? undefined,
            view: values?.view?.length ?? undefined,
            position_issues: values?.position_issues?.length ?? undefined,
          };
          setFilters(filteredFields);
          setSubmitting(false);
          resetForm();
          setOpenModal(false);
        }}
      >
        {({ values }) => (
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
                  <Accordion
                    selectedDataCount={values?.time_range?.length}
                    title="Time Range"
                  >
                    <div role="group" aria-labelledby="checkbox-group">
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="time_range" value="One" />
                        <span style={{ marginLeft: "5px" }}>One</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="time_range" value="Two" />
                        <span style={{ marginLeft: "5px" }}>Two</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field
                          type="checkbox"
                          name="time_range"
                          value="Three"
                        />
                        <span style={{ marginLeft: "5px" }}>Three</span>
                      </label>
                    </div>
                  </Accordion>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <Accordion
                    selectedDataCount={values?.quality?.length}
                    title="Quality"
                  >
                    <div role="group" aria-labelledby="checkbox-group">
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="quality" value="One" />
                        <span style={{ marginLeft: "5px" }}>One</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="quality" value="Two" />
                        <span style={{ marginLeft: "5px" }}>Two</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="quality" value="Three" />
                        <span style={{ marginLeft: "5px" }}>Three</span>
                      </label>
                    </div>
                  </Accordion>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <Accordion
                    selectedDataCount={values?.view?.length}
                    title="View"
                  >
                    <div role="group" aria-labelledby="checkbox-group">
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="view" value="One" />
                        <span style={{ marginLeft: "5px" }}>One</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="view" value="Two" />
                        <span style={{ marginLeft: "5px" }}>Two</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field type="checkbox" name="view" value="Three" />
                        <span style={{ marginLeft: "5px" }}>Three</span>
                      </label>
                    </div>
                  </Accordion>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <Accordion
                    selectedDataCount={values?.position_issues?.length}
                    title="Position issues"
                  >
                    <div role="group" aria-labelledby="checkbox-group">
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field
                          type="checkbox"
                          name="position_issues"
                          value="One"
                        />
                        <span style={{ marginLeft: "5px" }}>One</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field
                          type="checkbox"
                          name="position_issues"
                          value="Two"
                        />
                        <span style={{ marginLeft: "5px" }}>Two</span>
                      </label>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Field
                          type="checkbox"
                          name="position_issues"
                          value="Three"
                        />
                        <span style={{ marginLeft: "5px" }}>Three</span>
                      </label>
                    </div>
                  </Accordion>
                </div>

                <div style={{ marginTop: "2rem" }}>
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
        )}
      </Formik>
    </div>
  );
};

export default ImageListFilter;
