import * as Yup from "yup";
import {
  humanSchemas,
  locationSchemas,
  shipmentSchemas,
  timeSchemas,
} from "~/config/schemas";

const filterShipment = Yup.object({
  hubId: locationSchemas.hubId,
  shipmentStatus: shipmentSchemas.shipmentStatus,
  startDateTime: timeSchemas.startDateTime,
});

const addShipment = Yup.object({
  senderName: humanSchemas.name.required("Required"),
  senderPhone: humanSchemas.phone.required("Required"),
  senderAddress: humanSchemas.address.required("Required"),
  senderProvinceCode: locationSchemas.provinceCode.required("Required"),
  senderDistrictCode: locationSchemas.districtCode.required("Required"),
  receiverName: humanSchemas.name.required("Required"),
  receiverPhone: humanSchemas.phone.required("Required"),
  receiverAddress: humanSchemas.address.required("Required"),
  receiverProvinceCode: locationSchemas.provinceCode.required("Required"),
  receiverDistrictCode: locationSchemas.districtCode.required("Required"),
  valueInDollar: shipmentSchemas.valueInDollar.required("Required"),
  description: shipmentSchemas.description.required("Required"),
  weightInKg: shipmentSchemas.weightInKg.required("Required"),
  lengthInCm: shipmentSchemas.lengthInCm.required("Required"),
  widthInCm: shipmentSchemas.widthInCm.required("Required"),
  heightInCm: shipmentSchemas.heightInCm.required("Required"),
});

const FilterShipmentForCustomer = Yup.object({
  startDateTime: timeSchemas.startDateTime,
});

const schemas = { filterShipment, addShipment, FilterShipmentForCustomer };

export default schemas;
