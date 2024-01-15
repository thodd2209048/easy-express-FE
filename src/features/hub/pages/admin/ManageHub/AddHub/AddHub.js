// import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import RegionInput from "~/components/input/RegionInput/RegionInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

import { addHub } from "~/features/hub/api/api";
import schemas from "~/features/hub/config/schemas";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";

AddHub.propTypes = {};

function AddHub(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addHub,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hubs"] });
    },
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          location: "",
          provinceCode: "",
          districtCode: "",
        }}
        validationSchema={schemas.addHub}
        onSubmit={({ name, location, districtCode }) => {
          mutation.mutate({ name, location, districtCode });
        }}
      >
        {(props) => {
          return (
            <Form className="mt-3">
              <SubContentLayout subTitle="Enter new hub's information">
                <div>
                  <Field name="name">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Name: "
                          type="text"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="location">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Address: "
                          type="text"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <RegionInput />
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
                      onClick={() => props.resetForm()}
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
            <p>Hub is added</p>
            <p className="m-0">Hub: {mutation.data.data.name} </p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Location: {mutation.data.data.address}</p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default AddHub;
