import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";

import config from "~/config";
import api from "~/config/api/axiosConfig";

import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import axios from "axios";
import { Button } from "react-bootstrap";
import NotificationApi from "~/components/NotificationApi/NotificationApi";

AddStaff.propTypes = {};

function AddStaff(props) {
  const mutation = useMutation({
    mutationFn: (values) => api.post("/api/staff", values),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          hubId: "",
        }}
        validationSchema={config.schemas.staff}
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ touched, errors, isSubmitting, resetForm }) => (
          <Form className="mt-3">
            <SubContentLayout subTitle="Enter new staff's information">
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
                <Field name="hubId">
                  {({ field, form, meta }) => (
                    <>
                      <GeneralInput
                        label="HubId: "
                        type="number"
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
        )}
      </Formik>
      <NotificationApi mutation={mutation}>
        {mutation.isSuccess && (
          <>
            <p>Staff is added</p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Name: {mutation.data.data.name}</p>
            <p className="m-0">Hub: {mutation.data.data.hubId} </p>
          </>
        )}
      </NotificationApi>
    </div>
  );
}

export default AddStaff;
