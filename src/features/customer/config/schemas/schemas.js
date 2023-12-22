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
