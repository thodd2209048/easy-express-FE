import * as Yup from "yup";

export const shipment = Yup.object({
  senderName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  senderPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  senderAddress: Yup.string()
    .max(90, "Must be 90 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  senderProvinceCode: Yup.string().required("Required"),
  senderDistrictCode: Yup.string().required("Required"),
  receiverName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  receiverPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  receiverAddress: Yup.string()
    .max(90, "Must be 90 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  receiverProvinceCode: Yup.string().required("Required"),
  receiverDistrictCode: Yup.string().required("Required"),
  valueInDollar: Yup.number().positive("Must be positive").required("Required"),
  description: Yup.string()
    .max(200, "Must be 200 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  weightInKg: Yup.number().positive("Must be positive").required("Required"),
  lengthInCm: Yup.number().positive("Must be positive").required("Required"),
  widthInCm: Yup.number().positive("Must be positive").required("Required"),
  heightInCm: Yup.number().positive("Must be positive").required("Required"),
});

export const addOrderSchema = Yup.object({
  // Sender information
  senderName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be at least 1 character")
    .required("Required"),
  senderPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
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
