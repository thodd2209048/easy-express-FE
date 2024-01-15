import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Col, Form, Row } from "react-bootstrap";

ConstantInput.propTypes = { label: PropTypes.string };

function ConstantInput({
  label,
  leftLabel,
  options,
  field,
  form,
  meta,
  ...props
}) {
  return (
    <Row className="mt-2 mt-md-3 form-group">
      {!!leftLabel && (
        <Col xs="3" lg="2" className="d-flex">
          <label>{leftLabel}</label>
        </Col>
      )}
      <Col>
        <Form.Select
          className={meta.error && meta.touched ? "is-invalid" : ""}
          {...field}
          {...props}
        >
          <option value={""}>{label}</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
        <ErrorMessage
          component={"div"}
          name={field.name}
          className="invalid-feedback text-start"
        />
      </Col>
    </Row>
  );
}

export default ConstantInput;
