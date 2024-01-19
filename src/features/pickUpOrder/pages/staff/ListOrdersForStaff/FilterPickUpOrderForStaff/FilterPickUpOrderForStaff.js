import React, { memo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Field, Formik } from "formik";
import { Col, Form, Row } from "react-bootstrap";

import styles from "./FilterPickUpOrderForStaff.module.scss";
import schemas from "~/features/pickUpOrder/config/schemas";
import { pickUpOrderStatus } from "~/features/pickUpOrder/config/constant";
import ConstantInput from "~/components/input/ConstantInput/ConstantInput";
import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";

FilterPickUpOrderForStaff.propTypes = {
  className: PropTypes.string,
  setCondition: PropTypes.func,
};

function FilterPickUpOrderForStaff({ className, setCondition }) {
  return (
    <div className={clsx(styles.warpper, className)}>
      <Formik
        initialValues={{ status: "ASSIGNED_TO_HUB" }}
        validationSchema={schemas.filterPickUpOrderForStaff}
        onSubmit={({ status }) => {
          setCondition((prev) => ({ ...prev, status }));
        }}
      >
        {(props) => {
          return (
            <Form>
              <Row>
                <Col xs={12} md={4}>
                  <Field name="status">
                    {({ field, form, meta }) => {
                      return (
                        <>
                          <ConstantInput
                            label={"Status"}
                            options={pickUpOrderStatus}
                            field={field}
                            form={form}
                            meta={meta}
                          />
                        </>
                      );
                    }}
                  </Field>
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

export default memo(FilterPickUpOrderForStaff);
