import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { format } from "date-fns";
import schemas from "~/features/shipment/config/schemas";
import HubInput from "~/features/hub/components/input/HubInput/HubInput";
import ConstantInput from "~/components/input/ConstantInput/ConstantInput";
import { shipmentStatus } from "~/config/constant";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";
import { convertLocalDateToZoneDateTime } from "~/utils/convertZonedDateTimeToDateTime";

FilterShipment.propTypes = {};

function FilterShipment({ setCondition }) {
  return (
    <div className="mb-3 row">
      <div className="col">
        <Formik
          initialValues={{
            hubId: "",
            shipmentStatus: "",
            startDateTime: "",
          }}
          validationSchema={schemas.filterShipment}
          onSubmit={({ hubId, shipmentStatus, startDateTime }) =>
            setCondition((prev) => ({
              ...prev,
              hubId,
              shipmentStatus,
              startDateTime:
                startDateTime !== ""
                  ? convertLocalDateToZoneDateTime(startDateTime)
                  : startDateTime,
            }))
          }
        >
          {(props) => {
            return (
              <Form className="mt-3">
                <Row>
                  <Col>
                    <Field name="hubId">
                      {({ field, form, meta }) => (
                        <>
                          <HubInput field={field} form={form} meta={meta} />
                        </>
                      )}
                    </Field>
                  </Col>
                  <Col>
                    <Field name="shipmentStatus">
                      {({ field, form, meta }) => {
                        return (
                          <>
                            <ConstantInput
                              label={"Status"}
                              options={shipmentStatus}
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

export default memo(FilterShipment);
