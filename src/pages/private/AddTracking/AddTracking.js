import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";

import { addTracking } from "~/api/api";
import config from "~/config";
import { shipmentStatus } from "~/config/constant/constant";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import ConstantInput from "~/components/inputs/ConstantInput/ConstantInput";

AddTracking.propTypes = {};

function AddTracking(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addTracking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trackings"] });
    },
  });
  console.log(mutation);
  return (
    <>
      <Formik
        initialValues={{
          shipmentNumber: "",
          staffId: "",
          hubId: "",
          shipmentStatus: "",
          newShipmentNumber: "",
        }}
        validationSchema={config.schemas.tracking}
        onSubmit={(values) => {
          mutation.mutate({ ...values });
        }}
      >
        {({ touched, errors, isSubmitting, submitForm, resetForm, values }) => {
          return (
            <Form className="mt-3">
              <SubContentLayout subTitle="Enter new tracking's information">
                <div>
                  <Field name="shipmentNumber">
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
                  <Field name="staffId">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="StaffId: "
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
                  <Field name="hubId">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="HubId: "
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
                  <Field name="shipmentStatus">
                    {({ field, form, meta }) => {
                      const onChange = (e) => {
                        form.handleChange(e);
                        form.setFieldValue("newShipmentNumber", "");
                      };
                      return (
                        <>
                          <ConstantInput
                            leftLabel="Status:"
                            label="Select an option"
                            options={shipmentStatus}
                            field={field}
                            form={form}
                            meta={meta}
                            onChange={onChange}
                          />
                        </>
                      );
                    }}
                  </Field>
                  {values.shipmentStatus === "RETURNED_TO_SENDER" && (
                    <Field name="newShipmentNumber">
                      {({ field, form, meta }) => (
                        <>
                          <GeneralInput
                            label="New shipment number: "
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
                  )}
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      className="btn btn-primary me-3"
                      type="submit"
                      disabled={mutation.isPending}
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
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p>Tracking is added</p>
            <p className="m-0">Number: {mutation.data.data.shipmentNumber}</p>
            <p className="m-0">Status: {mutation.data.data.shipmentStatus}</p>
            <p className="m-0">
              Staff: {mutation.data.data.staff.id} -{" "}
              {mutation.data.data.staff.name}
            </p>
            <p className="m-0">
              Hub: {mutation.data.data.hub.id} - {mutation.data.data.hub.name}
            </p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default AddTracking;
