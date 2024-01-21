import { home } from "~/config/homePath";

const shipment = home + "shipment";
const shipmentAdmin = shipment + "/admin";
const shipmentAdminListShipment = shipmentAdmin + "/list-shipment";
const shipmentAdminGetShipment = shipmentAdmin + "/shipment";
const shipmentAdminGetShipmentWithNumber = shipmentAdmin + "/shipment/:number";

const shipmentCustomer = shipment + "/customer";
const shipmentCustomerAddShipment = shipmentCustomer + "/add-shipment";
const shipmentCustomerListShipment = shipmentCustomer + "/list-shipment";
const shipmentCustomerGetShipment = shipmentCustomer + "/shipment";
const shipmentCustomerGetShipmentWithNumber =
  shipmentCustomer + "/shipment/:number";
// const updateHub = hubAdmin + "/update-hub/:hubId";

export const paths = {
  shipment,
  shipmentAdmin,
  shipmentAdminListShipment,
  shipmentAdminGetShipment,
  shipmentAdminGetShipmentWithNumber,
  shipmentCustomer,
  shipmentCustomerAddShipment,
  shipmentCustomerListShipment,
  shipmentCustomerGetShipment,
  shipmentCustomerGetShipmentWithNumber,
};
