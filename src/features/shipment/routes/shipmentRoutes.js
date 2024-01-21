import GetShipment from "../pages/admin/ManageShipment/GetShipment/GetShipment";
import ListShipment from "../pages/admin/ManageShipment/ListShipment/ListShipment";
import ManageShipment from "../pages/admin/ManageShipment/ManageShipment";
import CreateShipment from "../pages/customer/CreateShipment/CreateShipment";
import GetShipmentForCustomer from "../pages/customer/GetShipmentForCustomer/GetShipmentForCustomer";
import ListShipmentForCustomer from "../pages/customer/ListShipmentForCustomer/ListShipmentForCustomer";
import { paths } from "./paths";

export const shipmentAdmin = [
  {
    path: paths.shipmentAdmin,
    component: ManageShipment,
    child: [
      { path: paths.shipmentAdminListShipment, component: ListShipment },
      {
        path: paths.shipmentAdminGetShipmentWithNumber,
        component: GetShipment,
      },
    ],
  },
];

export const shipmentCustomer = [
  { path: paths.shipmentCustomerAddShipment, component: CreateShipment },
  {
    path: paths.shipmentCustomerListShipment,
    component: ListShipmentForCustomer,
  },
  {
    path: paths.shipmentCustomerGetShipmentWithNumber,
    component: GetShipmentForCustomer,
  },
];
