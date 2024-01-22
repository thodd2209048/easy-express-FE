import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { Button, Col, Row } from "react-bootstrap";
import { Field, Form, Formik } from "formik";

import styles from "./CreatePickUpOrder.module.scss";

import { createPickUpOrder } from "~/features/pickUpOrder/api/api";
import {
  convertLocalDateTimeToZonedDateTime,
  convertZonedDateTimeToDateTime,
} from "~/utils/convertZonedDateTimeToDateTime";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import schemas from "~/features/pickUpOrder/config/schemas";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import RegionInput from "~/components/input/RegionInput/RegionInput";
import DisplayDistrictAndProvince from "~/components/ui/DisplayDistrictAndProvince/DisplayDistrictAndProvince";
import TopImage from "~/components/ui/TopImage/TopImage";
import images from "~/assets/images";

CreatePickUpOrder.propTypes = {};

function CreatePickUpOrder({ state }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => createPickUpOrder(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickUpOrders"] });
    },
  });

  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <TopImage
        title="Book a pick up order"
        image={images.top.pickUp1}
        imagePosition={"center 90%"}
      />
      <Row>
        <Col>
          {mutation.data && (
            <Button className="mt-2" onClick={mutation.reset}>
              Book another pick up order
            </Button>
          )}
        </Col>
      </Row>
      {!mutation.isSuccess && (
        <Formik
          initialValues={{
            senderName: state?.senderName || "",
            senderPhone: state?.senderPhone || "",
            senderAddress: state?.senderAddress || "",
            districtCode: state?.districtCode || "",
            startTime: state?.startTime || "",
            endTime: state?.endTime || "",
            description: state?.description || "",
            weightInKg: state?.weightInKg || "",
            lengthInCm: state?.lengthInCm || "",
            widthInCm: state?.widthInCm || "",
            heightInCm: state?.heightInCm || "",
          }}
          validationSchema={schemas.createPickUpOrder}
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
                  <Field name="senderAddress">
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
                  <RegionInput
                    // provinceFieldName="senderProvinceCode"
                    districtFieldName="districtCode"
                  />
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
                <SubContentLayout subTitle="Shipment details">
                  <Field name="description">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          label="Description: "
                          as="textarea"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="weightInKg">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          prefix="kg"
                          label="Weight: "
                          type="number"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="lengthInCm">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          prefix="cm"
                          label="Length: "
                          type="number"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="widthInCm">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          prefix="cm"
                          label="Width: "
                          type="number"
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    )}
                  </Field>
                  <Field name="heightInCm">
                    {({ field, form, meta }) => (
                      <>
                        <GeneralInput
                          prefix="cm"
                          label="Height: "
                          type="number"
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
            <p className="m-0 fw-bold">{mutation.data.data.orderNumber} </p>
            <p className="m-0 mt-2 fw-bold">Contact information</p>
            <p className="m-0">Name: {mutation.data.data.senderName} </p>
            <p className="m-0">Phone: {mutation.data.data.senderPhone}</p>
            <p className="m-0">Address: {mutation.data.data.senderAddress}</p>
            <p className="m-0">
              <DisplayDistrictAndProvince
                id={mutation.data.data.districtCode}
              />
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

export default CreatePickUpOrder;
