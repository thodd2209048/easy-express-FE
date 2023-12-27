import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { Button, Col, Row } from "react-bootstrap";

import styles from "./CreateShipment.module.scss";
import schemas from "../../config/schemas";
import { addShipment } from "~/api/api";

import PageTitle from "~/components/ui/PageTitle/PageTitle";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import RegionInput from "~/components/inputs/RegionInput/RegionInput";

CreateShipment.propTypes = {};

function CreateShipment(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addShipment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shipments"] });
    },
  });
  console.log("mutation:", mutation);
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Create new shipment" />
      </div>
      <Row>
        <Col>
          {mutation.data && (
            <Button onClick={mutation.reset}>Create another shipment</Button>
          )}
        </Col>
      </Row>
      {!mutation.isSuccess && (
        <Formik
          initialValues={{
            senderName: "",
            senderPhone: "",
            senderAddress: "",
            senderProvinceCode: "",
            senderDistrictCode: "",
            receiverName: "",
            receiverPhone: "",
            receiverAddress: "",
            receiverProvinceCode: "",
            receiverDistrictCode: "",
            valueInDollar: "",
            description: "",
            weightInKg: "",
            lengthInCm: "",
            widthInCm: "",
            heightInCm: "",
          }}
          validationSchema={schemas.shipment}
          onSubmit={(values) => {
            delete values.senderProvinceCode;
            delete values.receiverProvinceCode;
            mutation.mutate(values);
          }}
        >
          {({ touched, errors, isSubmitting, resetForm }) => (
            <Form className="mt-3">
              <SubContentLayout subTitle="From:">
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
                  provinceFieldName="senderProvinceCode"
                  districtFieldName="senderDistrictCode"
                />
              </SubContentLayout>
              <SubContentLayout subTitle="To:">
                <Field name="receiverName">
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
                <Field name="receiverPhone">
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
                <Field name="receiverAddress">
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
                  provinceFieldName="receiverProvinceCode"
                  districtFieldName="receiverDistrictCode"
                />
              </SubContentLayout>
              <SubContentLayout subTitle="Shipment details: ">
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
                <Field name="valueInDollar">
                  {({ field, form, meta }) => (
                    <>
                      <GeneralInput
                        prefix="USD"
                        label="Value: "
                        type="number"
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
            </Form>
          )}
        </Formik>
      )}
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p className="mt-2 fw-bold fs-5">
              BoL: {mutation.data.data.number}
            </p>
            <p className="m-0 mt-2 fw-bold">From:</p>
            <p className="m-0">Name: {mutation.data.data.senderName} </p>
            <p className="m-0">Phone: {mutation.data.data.senderPhone}</p>
            <p className="m-0">Address: {mutation.data.data.senderAddress}</p>
            <p className="m-0">
              Region: {mutation.data.data.senderDistrict.name}
              {", "}
              {mutation.data.data.senderDistrict.province.name}
            </p>
            <p className="mb-0 mt-2 fw-bold">To:</p>
            <p className="m-0">Name: {mutation.data.data.receiverName} </p>
            <p className="m-0">Phone: {mutation.data.data.receiverPhone}</p>
            <p className="m-0">Address: {mutation.data.data.receiverAddress}</p>
            <p className="m-0">
              Region: {mutation.data.data.receiverDistrict.name}
              {", "}
              {mutation.data.data.receiverDistrict.province.name}
            </p>

            <p className="mb-0 mt-2 fw-bold">Shipment details:</p>
            <p className="m-0">
              Description: {mutation.data.data.description}{" "}
            </p>
            <p className="m-0">
              Value: {mutation.data.data.valueInDollar}
              {"USD"}
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

export default CreateShipment;
