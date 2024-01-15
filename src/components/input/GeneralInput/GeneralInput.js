import React from "react";
import PropTypes from "prop-types";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";

GeneralInput.propTypes = {
  label: PropTypes.string,
};

function GeneralInput({ label, prefix, suffix, field, form, meta, ...props }) {
  return (
    <>
      <Row className="mt-2 mt-md-3 form-group">
        {!!label && (
          <Col xs="3" lg="2" className="d-flex">
            <label>{label}</label>
          </Col>
        )}
        <Col>
          {!!prefix || !!suffix ? (
            <InputGroup>
              {!!prefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
              <Form.Control
                className={meta.error && meta.touched ? "is-invalid" : ""}
                {...field}
                {...props}
              />
              {!!suffix && <InputGroup.Text>{suffix}</InputGroup.Text>}
              <ErrorMessage
                component={"div"}
                name={field.name}
                className="invalid-feedback text-start"
              />
            </InputGroup>
          ) : (
            <>
              <Form.Control
                className={meta.error && meta.touched ? "is-invalid" : ""}
                {...field}
                {...props}
              />

              <ErrorMessage
                component={"div"}
                name={field.name}
                className="invalid-feedback text-start"
              />
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default GeneralInput;
