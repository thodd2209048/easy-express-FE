import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import config from "~/config";
import { addHub } from "~/api/api";

import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import NotificationApi from "~/components/NotificationApi/NotificationApi";

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
        }}
        validationSchema={config.schemas.hub}
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ touched, errors, isSubmitting, resetForm }) => (
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
                        label="Location: "
                        type="text"
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
                    disabled={isSubmitting}
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
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p>Hub is added</p>
            <p className="m-0">Hub: {mutation.data.data.name} </p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Location: {mutation.data.data.location}</p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default AddHub;
