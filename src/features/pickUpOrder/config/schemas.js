import * as Yup from "yup";
import {
  humanSchemas,
  locationSchemas,
  shipmentSchemas,
  timeSchemas,
} from "~/config/schemas";
import {
  customerUpdatePickUpOrDerOptions,
  pickUpOrderStatus,
} from "./constant";

const createPickUpOrder = Yup.object({
  senderName: humanSchemas.name.required("Required"),
  senderPhone: humanSchemas.phone.required("Required"),
  senderAddress: humanSchemas.address.required("Required"),
  districtCode: locationSchemas.districtCode.required("Required"),
  startTime: timeSchemas.startDateTime.required("Required"),
  endTime: timeSchemas.startDateTime.required("Required"),
  description: shipmentSchemas.description.required("Required"),
  weightInKg: shipmentSchemas.weightInKg.required("Required"),
  lengthInCm: shipmentSchemas.lengthInCm.required("Required"),
  widthInCm: shipmentSchemas.widthInCm.required("Required"),
  heightInCm: shipmentSchemas.heightInCm.required("Required"),
});

const updatePickUpOrderByCustomer = Yup.object({
  // Sender information
  senderName: humanSchemas.name,
  senderPhone: humanSchemas.phone,
  // Time information // chuyen sang check dinh dang cua chuoi string co phu hop voi zoneddatetime ko
  startTime: timeSchemas.startDateTime,
  endTime: timeSchemas.startDateTime,
});

const filterPickUpOrder = Yup.object({
  status: Yup.string().oneOf(pickUpOrderStatus, "Please select an option"),
  startTime: timeSchemas.startDateTime.nullable(),
});

const schemas = {
  createPickUpOrder,
  updatePickUpOrderByCustomer,
  filterPickUpOrder,
};

export default schemas;
