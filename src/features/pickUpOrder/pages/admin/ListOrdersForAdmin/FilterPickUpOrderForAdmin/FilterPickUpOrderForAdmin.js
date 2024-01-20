import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";

import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";
import ConstantInput from "~/components/input/ConstantInput/ConstantInput";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import HubInput from "~/features/hub/components/input/HubInput/HubInput";
import { pickUpOrderStatus } from "~/features/pickUpOrder/config/constant";
import schemas from "~/features/pickUpOrder/config/schemas";
import {
  convertLocalDateToZoneDateTime,
  getLocalDate,
} from "~/utils/convertZonedDateTimeToDateTime";

FilterPickUpOrderForAdmin.propTypes = {};

function FilterPickUpOrderForAdmin({ setCondition }) {
  return (
    <div className="mb-3 row">
      <div className="col">
        <Formik
          initialValues={{
            status: "",
            hubId: "",
            startTime: getLocalDate(new Date()),
          }}
          validationSchema={schemas.filterPickUpOrderForAdmin}
          onSubmit={({ status, hubId, startTime }) =>
            setCondition((prev) => ({
              ...prev,
              status,
              hubId,
              startTime:
                startTime !== ""
                  ? convertLocalDateToZoneDateTime(startTime)
                  : "",
            }))
          }
        >
          {({ values }) => {
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
                    <Field name="hubId">
                      {({ field, form, meta }) => {
                        return (
                          <>
                            <HubInput
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

export default memo(FilterPickUpOrderForAdmin);
