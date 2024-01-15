import { home } from "~/config/homePath";

const shipment = home + "shipment";
const shipmentAdmin = shipment + "/admin";
const shipmentAdminListShipment = shipmentAdmin + "/list-shipment";

const shipmentCustomer = shipment + "/customer";
const shipmentCustomerAddShipment = shipmentCustomer + "/add-shipment";
// const updateHub = hubAdmin + "/update-hub/:hubId";

export const paths = {
  shipment,
  shipmentAdmin,
  shipmentAdminListShipment,
  shipmentCustomer,
  shipmentCustomerAddShipment,
};
