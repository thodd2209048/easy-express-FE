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
  const staffId = 22;
  return (
    <>
      <Formik
        initialValues={{
          shipmentNumber: "",
          status: "",
        }}
        validationSchema={config.schemas.tracking}
        onSubmit={(values) => {
          mutation.mutate({ ...values, staffId });
        }}
      >
        {({ touched, errors, isSubmitting, submitForm, resetForm }) => {
          return (
            <Form className="mt-3">
              <SubContentLayout subTitle="Enter new tracking's information">
                <div>
                  <Field name="shipmentNumber">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Shipment number: "
                          type="text"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="status">
                    {({ field, form, meta }) => {
                      return (
                        <>
                          <ConstantInput
                            label="Status: "
                            options={shipmentStatus}
                            field={field}
                            form={form}
                            meta={meta}
                          />
                        </>
                      );
                    }}
                  </Field>
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
            <p className="m-0">Status: {mutation.data.data.status}</p>
            <p className="m-0">
              Staff: {mutation.data.data.staffId} -{" "}
              {mutation.data.data.staffName}
            </p>
            <p className="m-0">
              Hub: {mutation.data.data.hubId} - {mutation.data.data.hubName}
            </p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default AddTracking;