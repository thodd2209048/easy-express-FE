import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";

import adminSchemas from "~/features/admin/config/schemas";

import ListenAllChangeFormik from "~/components/auto/ListenAllChangeFormik/ListenAllChangeFormik";
import HubInput from "~/features/admin/components/inputs/HubInput/HubInput";
import ConstantInput from "~/components/inputs/ConstantInput/ConstantInput";
import { shipmentStatus } from "~/config/constant/constant";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import { format } from "date-fns";

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
          validationSchema={adminSchemas.filterShipment}
          onSubmit={({ hubId, shipmentStatus, startDateTime }) =>
            setCondition((prev) => ({
              ...prev,
              hubId,
              shipmentStatus,
              startDateTime:
                startDateTime !== ""
                  ? format(new Date(startDateTime), "yyyy-MM-dd'T'HH:mm:ssXXX")
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
