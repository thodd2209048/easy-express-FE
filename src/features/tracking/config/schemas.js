import * as Yup from "yup";
import { filterSchemas, shipmentSchemas } from "~/config/schemas";

const addTracking = Yup.object({
  shipmentNumber: shipmentSchemas.shipmentNumber.required("Required"),
  staffId: filterSchemas.id.required("Required"),
  hubId: filterSchemas.id.required("Required"),
  shipmentStatus: shipmentSchemas.shipmentStatus,
  newShipmentNumber: shipmentSchemas.shipmentNumber,
});

const trackingShipment = Yup.object({
  number: shipmentSchemas.shipmentNumber.required("Required"),
});

const schemas = { addTracking, trackingShipment };
export default schemas;
