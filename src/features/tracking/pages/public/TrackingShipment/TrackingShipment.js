import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import schemas from "~/features/tracking/config/schemas";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import TrackingsDisplay from "./TrackingsDisplay/TrackingsDisplay";

TrackingShipment.propTypes = {};

function TrackingShipment(props) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleTrack = (values) => {
    navigate(`/tracking?shipment=${values.number}`);
  };

  useEffect(() => {
    let newNumber = new URLSearchParams(location.search).get("shipment");
    if (!!newNumber) {
      setTrackingNumber(newNumber);
    }
  }, [location]);

  return (
    <div>
      <Formik
        initialValues={{
          number: trackingNumber,
        }}
        validationSchema={schemas.trackingShipment}
        onSubmit={(values) => {
          handleTrack(values);
        }}
        enableReinitialize={true}
      >
        {({ errors, touched, resetForm, values, setFieldValue }) => {
          return (
            <Form className="mt-3">
              <SubContentLayout subTitle="Tracking">
                <div>
                  <Field name="number">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Shipment number: "
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]+"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      className="btn btn-primary me-3"
                      type="submit"
                      // disabled={query.isPending}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      type="reset"
                      onClick={() => resetForm()}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </SubContentLayout>
            </Form>
          );
        }}
      </Formik>
      {!!trackingNumber && <TrackingsDisplay number={trackingNumber} />}
    </div>
  );
}

export default TrackingShipment;
