import { home } from "~/config/homePath";
import { hubAdmin } from "~/features/hub/routes/hubRoutes";
import {
  pickUpOrderAdmin,
  pickUpOrderCustomer,
  pickUpOrderStaff,
} from "~/features/pickUpOrder/routes/pickUpOrderRoutes";
import {
  shipmentAdmin,
  shipmentCustomer,
} from "~/features/shipment/routes/shipmentRoutes";
import { staffAdmin } from "~/features/staff/routes/staffRoutes";
import {
  trackingAdmin,
  trackingPublic,
  trackingStaff,
} from "~/features/tracking/routes/trackingRoutes";
import Home from "~/pages/public/Home/Home";
// import TrackingShipment from "~/pages/public/TrackingShipment/TrackingShipment";

const publicRoutes = [
  { path: home, component: Home },
  ...trackingPublic,
  // { path: paths.trackingShipment, component: TrackingShipment },
];

const adminRoutes = [
  ...hubAdmin,
  ...staffAdmin,
  ...shipmentAdmin,
  ...trackingAdmin,
  ...pickUpOrderAdmin,
];

const customerRoutes = [...shipmentCustomer, ...pickUpOrderCustomer];
const staffRoutes = [...trackingStaff, ...pickUpOrderStaff];

export { adminRoutes, customerRoutes, publicRoutes, staffRoutes };
