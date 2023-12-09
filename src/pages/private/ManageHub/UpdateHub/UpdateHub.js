import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import api from "~/config/api/axiosConfig";
import { Field, Form, Formik } from "formik";
import config from "~/config";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import { useParams } from "react-router-dom";

UpdateHub.propTypes = {};

function UpdateHub({ hubId }) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const handleSubmit = async (values) => {
    setResponse({ data: null, error: null, isLoading: true });
    try {
      const res = await api.put(`api/hub/${hubId}`, values);
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
          <Form className="mt-2">
            <p>Update</p>

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
                  className="btn btn-primary me-3 btn-sm"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="reset"
                  onClick={() => resetForm()}
                >
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UpdateHub;
