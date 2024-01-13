import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button, Col, Row } from "react-bootstrap";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";

import styles from "./UpdatePickUpOrder.module.scss";
import {
  convertLocalDateTimeToZonedDateTime,
  convertZonedDateTimeToDateTime,
} from "~/utils/convertZonedDateTimeToDateTime";
import schemas from "../../config/schemas";
import { updatePickUpOrder } from "../../api/api";

import PageTitle from "~/components/ui/PageTitle/PageTitle";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

UpdatePickUpOrder.propTypes = {};

function UpdatePickUpOrder(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id, values) => updatePickUpOrder(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickUpOrders"] });
    },
  });
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Update pick up order" />
      </div>
      <Row>
        <Col>
          {mutation.data && (
            <Button onClick={mutation.reset}>Book another pick up order</Button>
          )}
        </Col>
      </Row>
      {!mutation.isSuccess && (
        <Formik
          initialValues={{
            status: "",
            senderName: "",
            senderPhone: "",
            startTime: "",
            endTime: "",
          }}
          validationSchema={schemas.updatePickUpOrderByCustomer}
          onSubmit={(values) => {
            const startTimeZDT = convertLocalDateTimeToZonedDateTime(
              values.startTime
            );
            const endTimeZDT = convertLocalDateTimeToZonedDateTime(
              values.endTime
            );
            mutation.mutate({
              ...values,
              startTime: startTimeZDT,
              endTime: endTimeZDT,
            });
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
              </Form>
            );
          }}
        </Formik>
      )}
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p className="m-0 mt-2 fw-bold">Contact information</p>
            <p className="m-0">Name: {mutation.data.data.senderName} </p>
            <p className="m-0">Phone: {mutation.data.data.senderPhone}</p>
            <p className="m-0">Address: {mutation.data.data.senderAddress}</p>
            <p className="m-0">
              Region: {mutation.data.data.district.name}
              {", "}
              {mutation.data.data.district.province.name}
            </p>

            <p className="mb-0 mt-2 fw-bold">Pick up time:</p>
            <p className="m-0">
              From time:{" "}
              {convertZonedDateTimeToDateTime(mutation.data.data.startTime)}
            </p>
            <p className="m-0">
              To time:{" "}
              {convertZonedDateTimeToDateTime(mutation.data.data.endTime)}
            </p>

            <p className="mb-0 mt-2 fw-bold">Shipment details:</p>
            <p className="m-0">
              Description: {mutation.data.data.description}{" "}
            </p>
            <p className="m-0">
              Weight: {mutation.data.data.weightInKg}
              {"kg"}
            </p>
            <p className="m-0">
              Length: {mutation.data.data.lengthInCm}
              {"cm"}{" "}
            </p>
            <p className="m-0">
              Width: {mutation.data.data.widthInCm}
              {"cm"}
            </p>
            <p className="m-0">
              Height: {mutation.data.data.heightInCm}
              {"cm"}
            </p>
          </>
        )}
      </NotificationApi>
    </div>
  );
}

export default UpdatePickUpOrder;
