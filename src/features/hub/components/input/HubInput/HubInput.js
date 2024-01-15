import { useQuery } from "@tanstack/react-query";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Col, Form, Row } from "react-bootstrap";
import { listHubWithCondition } from "~/features/hub/api/api";

HubInput.propTypes = { label: PropTypes.string };

function HubInput({ label, field, form, meta, ...props }) {
  const query = useQuery({
    queryKey: ["hubs"],
    queryFn: () => listHubWithCondition(),
    staleTime: 1000 * 60 * 10,
  });
  return (
    <Row className="mt-2 mt-md-3 form-group">
      {!!label && (
        <Col xs="3" lg="2" className="d-flex">
          <label>{label}</label>
        </Col>
      )}
      <Col>
        <Form.Select
          className={meta.error && meta.touched ? "is-invalid" : ""}
          {...field}
          {...props}
        >
          <option value="">Hub</option>
          {query.data?.data.content.map((hub, idx) => (
            <option key={idx} value={hub.id}>
              {hub.name}
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

export default HubInput;
