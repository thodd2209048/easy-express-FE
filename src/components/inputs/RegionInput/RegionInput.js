import { useQuery } from "@tanstack/react-query";
import { Field } from "formik";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { listDistrict, listProvince } from "~/api/api";

RegionInput.propTypes = {};

function RegionInput({
  provinceFieldName = "provinceCode",
  districtFieldName = "districtCode",
  ...props
}) {
  const provinceQuery = useQuery({
    queryKey: ["province"],
    queryFn: listProvince,
    staleTime: 1000 * 60 * 10,
  });
  const districtQuery = useQuery({
    queryKey: ["district"],
    queryFn: () => listDistrict(),
    staleTime: 1000 * 60 * 10,
  });
  return (
    <Row className="mt-2 mt-md-3 form-group">
      <Col xs="3" lg="2" className="d-flex">
        <label>Region: </label>
      </Col>
      <Col xs="9" lg="10">
        <Field name={provinceFieldName}>
          {({ field, form, meta }) => (
            <Form.Select
              className={meta.error && meta.touched ? "is-invalid" : ""}
              onChange={(e) => {
                form.handleChange(e);
                form.setFieldValue(districtFieldName, "");
              }}
              {...field}
              {...props}
            >
              <option value={""}>Open this select province</option>
              {provinceQuery.isSuccess &&
                provinceQuery.data.data.map((province, idx) => (
                  <option key={idx} value={province.code}>
                    {province.name}
                  </option>
                ))}
            </Form.Select>
          )}
        </Field>
        <Field name={districtFieldName}>
          {({ field, form, meta }) => {
            return (
              <>
                <Form.Select
                  className={
                    meta.error && meta.touched ? "is-invalid mt-2" : " mt-2"
                  }
                  {...field}
                  {...props}
                >
                  <option value={""}>Open this select district</option>
                  {districtQuery.isSuccess &&
                    districtQuery.data.data
                      .filter(
                        (district) =>
                          district.province.code ===
                          form.values[provinceFieldName]
                      )
                      .map((district, idx) => (
                        <option key={idx} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                </Form.Select>
              </>
            );
          }}
        </Field>
      </Col>
    </Row>
  );
}

export default RegionInput;
