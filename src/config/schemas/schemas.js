import * as Yup from "yup";
import { shipmentStatus } from "../constant/constant";

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

export const tracking = Yup.object({
  shipmentNumber: Yup.string()
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters")
    .required("Required"),
  staffId: Yup.number().integer("Id must be an integer").required("Required"),
  hubId: Yup.number().integer("Id must be an integer").required("Required"),
  status: Yup.string().oneOf(shipmentStatus).required("Required"),
});

export const trackingShipment = Yup.object({
  number: Yup.string()
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters")
    .required("Required"),
});

export const region = Yup.object({
  provinceCode: Yup.string().required("Required"),
  districtCode: Yup.string().required("Required"),
});
