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
    .max(45, "Must be 45 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  receiverName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  receiverPhone: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  receiverAddress: Yup.string()
    .max(45, "Must be 45 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  value: Yup.number().positive("Must be positive").required("Required"),
  description: Yup.string()
    .max(100, "Must be 100 characters or less")
    .min(1, "Must be 1 characters or more")
    .required("Required"),
  weight: Yup.number().positive("Must be positive").required("Required"),
  length: Yup.number().positive("Must be positive").required("Required"),
  width: Yup.number().positive("Must be positive").required("Required"),
  height: Yup.number().positive("Must be positive").required("Required"),
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
