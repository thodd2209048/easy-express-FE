import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";

import styles from "./CreateShipment.module.scss";
import routes from "~/config/routes/routes";
import schemas from "~/config/schemas";

import PageTitle from "~/components/PageTitle/PageTitle";

import NotificationApi from "~/components/NotificationApi/NotificationApi";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import { addShipment } from "~/api/api";

CreateShipment.propTypes = {};

function CreateShipment(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addShipment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shipments"] });
    },
  });
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Create new shipment" />
      </div>
      <Formik
        initialValues={{
          senderName: "",
          senderPhone: "",
          senderAddress: "",
          receiverName: "",
          receiverPhone: "",
          receiverAddress: "",
          value: "",
          description: "",
          weight: "",
          length: "",
          width: "",
          height: "",
        }}
        validationSchema={schemas.hub}
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ touched, errors, isSubmitting, resetForm }) => (
          <Form className="mt-3">
            <SubContentLayout subTitle="Enter new hub's information">
              <div>
                <p className="fs-3">From:</p>
                <Field name="senderName">
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
            <p>NOTI</p>
            <p className="m-0">Hub: {mutation.data.data.name} </p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Location: {mutation.data.data.location}</p>
          </>
        )}
      </NotificationApi>
    </div>
  );
}

export default CreateShipment;
