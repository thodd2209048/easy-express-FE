import * as Yup from "yup";
import { shipmentStatus } from "../constant/constant";

export const tracking = Yup.object({
  shipmentNumber: Yup.string()
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters")
    .required("Required"),
  staffId: Yup.number().integer("Id must be an integer").required("Required"),
  hubId: Yup.number().integer("Id must be an integer").required("Required"),
  shipmentStatus: Yup.string()
    .oneOf(shipmentStatus, "Please select one option")
    .required("Required"),
  newShipmentNumber: Yup.string()
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters"),
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
