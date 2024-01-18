import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";

import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import schemas from "~/features/shipment/config/schemas";
import { convertLocalDateToZoneDateTime } from "~/utils/convertZonedDateTimeToDateTime";

FilterShipmentForCustomer.propTypes = {};

function FilterShipmentForCustomer({ setCondition }) {
  return (
    <div className="mb-3 row">
      <div className="col">
        <Formik
          initialValues={{
            startDateTime: "",
          }}
          validationSchema={schemas.filterShipmentsForCustomer}
          onSubmit={({ startDateTime }) =>
            setCondition((prev) => ({
              ...prev,
              startDateTime:
                startDateTime !== ""
                  ? convertLocalDateToZoneDateTime(startDateTime)
                  : startDateTime,
            }))
          }
        >
          {(props) => {
            return (
              <Form>
                <Row>
                  <Col xs={12} md={3}>
                    <Field name="startDateTime">
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

export default memo(FilterShipmentForCustomer);
