import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { Row } from "react-bootstrap";

import config from "~/config";
import api from "~/config/api/axiosConfig";

import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import Notification from "~/components/Notification/Notification";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";

AddHub.propTypes = {};

function AddHub(props) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const handleSubmit = async (values) => {
    setResponse({ data: null, error: null, isLoading: true });
    try {
      const res = await api.post("api/hub", values);
      setResponse({ data: res.data, error: null, isLoading: false });
    } catch (err) {
      setResponse({ data: null, error: err.response.data, isLoading: false });
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          location: "",
        }}
        validationSchema={config.schemas.hub}
        onSubmit={(values) => handleSubmit(values)}
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
      <Notification response={response} isShowSucceed>
        {response.data && (
          <>
            <p>Hub is added</p>
            <p className="m-0">Hub: {response.data.name} </p>
            <p className="m-0">Id: {response.data.id}</p>
            <p className="m-0">Location: {response.data.location}</p>
          </>
        )}
      </Notification>
    </>
  );
}

export default AddHub;
