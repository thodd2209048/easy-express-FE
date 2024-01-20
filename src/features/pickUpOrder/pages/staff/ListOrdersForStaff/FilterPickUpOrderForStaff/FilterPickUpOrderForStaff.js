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
import {
  convertLocalDateTimeToZonedDateTime,
  getLocalDate,
} from "~/utils/convertZonedDateTimeToDateTime";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";

FilterPickUpOrderForStaff.propTypes = {
  className: PropTypes.string,
  setCondition: PropTypes.func,
};

function FilterPickUpOrderForStaff({ className, setCondition }) {
  return (
    <div className={clsx(styles.warpper, className)}>
      <Formik
        initialValues={{
          status: "ASSIGNED_TO_HUB",
          startTime: getLocalDate(new Date()),
        }}
        validationSchema={schemas.filterPickUpOrderForStaff}
        onSubmit={({ status, startTime }) => {
          setCondition((prev) => ({
            ...prev,
            status,
            startTime:
              startTime !== ""
                ? convertLocalDateTimeToZonedDateTime(startTime)
                : "",
          }));
        }}
      >
        {(props) => {
          return (
            <Form>
              <Row>
                <Col>
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
                <Col>
                  <Field name="startTime">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          type="date"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
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
