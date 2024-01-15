import ListShipment from "../pages/admin/ManageShipment/ListShipment/ListShipment";
import ManageShipment from "../pages/admin/ManageShipment/ManageShipment";
import CreateShipment from "../pages/customer/CreateShipment/CreateShipment";
import { paths } from "./paths";

export const shipmentAdmin = [
  {
    path: paths.shipmentAdmin,
    component: ManageShipment,
    child: [{ path: paths.shipmentAdminListShipment, component: ListShipment }],
  },
];

export const shipmentCustomer = [
  { path: paths.shipmentCustomerAddShipment, component: CreateShipment },
];
