import { useQuery } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";

import { listHubWithCondition } from "~/features/hub/api/api";
import schemas from "~/features/staff/config/schemas";

FilterStaff.propTypes = {
  setCondition: PropTypes.func,
};

function FilterStaff({ setCondition }) {
  const { data, isSuccess } = useQuery({
    queryKey: ["hubs"],
    queryFn: () => listHubWithCondition(),
  });

  return (
    <div className="mb-3">
      <Formik
        initialValues={{
          hubId: "",
          sortField: "",
          direction: "",
          searchTerm: "",
        }}
        validationSchema={schemas.filterStaff}
        onSubmit={(values) => {
          setCondition((prev) => ({ ...prev, ...values }));
        }}
      >
        {(props) => {
          return (
            <Form className="mt-3">
              <Row>
                <Col>
                  <Field as="select" name="hubId" className={"form-select"}>
                    <option value={""}>All hub</option>
                    {isSuccess &&
                      data?.data.content.map((hub) => (
                        <option key={hub.id} value={hub.id}>
                          {hub.name}
                        </option>
                      ))}
                  </Field>
                </Col>
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

export default memo(FilterStaff);
