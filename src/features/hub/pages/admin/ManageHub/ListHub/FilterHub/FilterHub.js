import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";

import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";

FilterHub.propTypes = {};

function FilterHub({ setCondition }) {
  return (
    <div className="mb-3">
      {" "}
      <Formik
        initialValues={{
          sortField: "",
          direction: "",
          searchTerm: "",
        }}
        onSubmit={(values) => {
          setCondition((prev) => ({ ...prev, ...values }));
        }}
      >
        {(props) => {
          return (
            <Form className="mt-3">
              <Row>
                <Col>
                  <Field as="select" name="sortField" className={"form-select"}>
                    <option value={"id"}>Sort by ID</option>
                    <option value={"name"}>Sort by Name</option>
                  </Field>
                </Col>
                <Col>
                  <Field as="select" name="direction" className={"form-select"}>
                    <option value={"asc"}>ASC</option>
                    <option value={"desc"}>DESC</option>
                  </Field>
                </Col>
                <Col>
                  <Field
                    name="searchTerm"
                    placeholder="Search..."
                    className="form-control"
                  />
                </Col>
              </Row>
              <ListenAllChangeFormik />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default memo(FilterHub);
