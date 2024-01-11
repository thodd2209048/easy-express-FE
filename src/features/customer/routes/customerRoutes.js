import CreatePickUpOrder from "../pages/CreatePickUpOrder/CreatePickUpOrder";
import CreateShipment from "../pages/CreateShipment/CreateShipment";
import paths from "./paths/paths";

const customerRoutes = [
  { path: paths.createShipment, component: CreateShipment },
  { path: paths.createPickUpOrder, component: CreatePickUpOrder },
  // Hub
];

export default customerRoutes;
