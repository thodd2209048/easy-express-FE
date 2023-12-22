import CreateShipment from "../pages/CreateShipment/CreateShipment";
import CustomerOrders from "../pages/CustomerOrders/CustomerOrders/CustomerOrders";
import paths from "./paths/paths";

const customerRoutes = [
  { path: paths.customerOrders, component: CustomerOrders },
  { path: paths.createShipment, component: CreateShipment },
  // Hub
];

export default customerRoutes;
