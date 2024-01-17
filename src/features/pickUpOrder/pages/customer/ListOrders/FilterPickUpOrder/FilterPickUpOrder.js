import React, { memo } from "react";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { Col, Row } from "react-bootstrap";

import { pickUpOrderStatus } from "~/features/pickUpOrder/config/constant";
import schemas from "~/features/pickUpOrder/config/schemas";

import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import ConstantInput from "~/components/input/ConstantInput/ConstantInput";
import { convertLocalDateToZoneDateTime } from "~/utils/convertZonedDateTimeToDateTime";

FilterPickUpOrder.propTypes = {};

function FilterPickUpOrder({ setCondition }) {
  return (
    <div className="mb-3 row">
      <div className="col">
        <Formik
          initialValues={{
            status: "",
            startTime: "",
          }}
          validationSchema={schemas.filterPickUpOrder}
          onSubmit={({ status, startTime }) =>
            setCondition((prev) => ({
              ...prev,
              status,
              startTime:
                startTime !== ""
                  ? convertLocalDateToZoneDateTime(startTime)
                  : "",
            }))
          }
        >
          {(props) => {
            return (
              <Form className="mt-3">
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
    </div>
  );
}

export default memo(FilterPickUpOrder);
