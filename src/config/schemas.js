import * as Yup from "yup";
import { shipmentStatus } from "./constant";

export const humanSchemas = {
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(4, "Must be 4 characters or more"),
  phone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number format"
    ),
  address: Yup.string()
    .max(90, "Must be 90 characters or less")
    .min(1, "Must be 1 characters or more"),
};

export const locationSchemas = {
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(4, "Must be 4 characters or more"),
  address: Yup.string()
    .max(100, "Must be 100 characters or less")
    .min(10, "Must be 10 characters or more"),
  districtCode: Yup.number()
    .integer("Must be integer")
    .positive("Must be positive"),
  provinceCode: Yup.number()
    .integer("Must be integer")
    .positive("Must be positive"),
};

export const shipmentSchemas = {
  shipmentStatus: Yup.string().oneOf(
    [...shipmentStatus, ""],
    "Please select one option"
  ),
  shipmentNumber: Yup.string()
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters"),
  valueInDollar: Yup.number().positive("Must be positive"),
  description: Yup.string()
    .max(200, "Must be 200 characters or less")
    .min(1, "Must be 1 characters or more"),
  weightInKg: Yup.number().positive("Must be positive"),
  lengthInCm: Yup.number().positive("Must be positive"),
  widthInCm: Yup.number().positive("Must be positive"),
  heightInCm: Yup.number().positive("Must be positive"),
};

export const timeSchemas = {
  startDateTime: Yup.string(),
};

export const filterSchemas = {
  sortField: Yup.string(),
  direction: Yup.string(),
  searchTerm: Yup.string(),
  id: Yup.number().positive("Must be positive"),
};
