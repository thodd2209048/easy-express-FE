import * as Yup from "yup";
import { customerUpdatePickUpOrDerOptions } from "../constant";

export const addPickUpOrder = Yup.object({
  // Sender information
  senderName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be at least 1 character")
    .required("Required"),
  senderPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number format"
    )
    .required("Required"),
  senderAddress: Yup.string()
    .max(90, "Must be 90 characters or less")
    .min(10, "Must be 10 characters or more")
    .required("Required"),
  districtCode: Yup.string().required("Required"),

  // Time information // chuyen sang check dinh dang cua chuoi string co phu hop voi zoneddatetime ko
  startTime: Yup.string()
    // .typeError("Must be a valid zoned date-time")
    .required("Required"),
  endTime: Yup.string()
    // .typeError("Must be a valid zoned date-time")
    .required("Required"),

  // Order details
  description: Yup.string()
    .max(200, "Must be 200 characters or less")
    .min(1, "Must be at least 1 character")
    .required("Required"),
  weightInKg: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Required"),
  lengthInCm: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Required"),
  widthInCm: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Required"),
  heightInCm: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Required"),
});

export const updatePickUpOrderByCustomer = Yup.object({
  status: Yup.string().oneOf(customerUpdatePickUpOrDerOptions).nullable,
  // Sender information
  senderName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be at least 1 character"),
  senderPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number format"
    ),

  // Time information // chuyen sang check dinh dang cua chuoi string co phu hop voi zoneddatetime ko
  startTime: Yup.string(),
  endTime: Yup.string(),
});
