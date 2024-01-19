import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button, Col, Row } from "react-bootstrap";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";

import styles from "./UpdatePickUpOrder.module.scss";
import {
  convertLocalDateTimeToZonedDateTime,
  convertZonedDateTimeToDateTime,
} from "~/utils/convertZonedDateTimeToDateTime";
import schemas from "~/features/pickUpOrder/config/schemas";

import { updatePickUpOrder } from "~/features/pickUpOrder/api/api";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

UpdatePickUpOrder.propTypes = {};

function UpdatePickUpOrder({ id, initData }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => {
      return updatePickUpOrder(id, values);
    },
    onSuccess: (data) => {
      queryClient.setQueryData({
        queryKey: ["pickUpOrder", id],
        data,
      });
      queryClient.refetchQueries({ queryKey: ["pickUpOrder", id] });
    },
  });

  console.log("mutation", mutation);
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      {!mutation.isSuccess && (
        <Formik
          initialValues={{
            senderName: initData.senderName,
            senderPhone: initData.senderPhone,
            startTime: convertZonedDateTimeToDateTime(initData.startTime),
            endTime: convertZonedDateTimeToDateTime(initData.endTime),
          }}
          validationSchema={schemas.updatePickUpOrderByCustomer}
          onSubmit={(values) => {
            const startTimeZDT = convertLocalDateTimeToZonedDateTime(
              values.startTime
            );
            const endTimeZDT = convertLocalDateTimeToZonedDateTime(
              values.endTime
            );
            const newValues = {
              ...values,
              startTime: startTimeZDT,
              endTime: endTimeZDT,
            };
            mutation.mutate(newValues);
          }}
        >
          {({
            touched,
            errors,
            isSubmitting,
            resetForm,
            values,
            isValid,
            dirty,
          }) => {
            // console.log("errors", errors);
            return (
              <Form className="mt-3">
                <SubContentLayout subTitle="Contact Information">
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
                  <Field name="senderPhone">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Phone: "
                          type="text"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                </SubContentLayout>
                <SubContentLayout subTitle="Pick up time">
                  <Field name="startTime">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="From time: "
                          type="datetime-local"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="endTime">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="To time: "
                          type="datetime-local"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                </SubContentLayout>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      className="btn btn-primary me-3"
                      type="submit"
                      disabled={mutation.isPending || !isValid || !dirty}
                    >
                      Update
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
              </Form>
            );
          }}
        </Formik>
      )}
      <NotificationApi
        response={mutation}
        showSuccess={false}
      ></NotificationApi>
    </div>
  );
}

export default UpdatePickUpOrder;
