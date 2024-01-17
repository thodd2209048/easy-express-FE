import Home from "~/pages/public/Home/Home";
import { home } from "~/config/homePath";
import { staffAdmin } from "~/features/staff/routes/staffRoutes";
import { hubAdmin } from "~/features/hub/routes/hubRoutes";
import {
  shipmentAdmin,
  shipmentCustomer,
} from "~/features/shipment/routes/shipmentRoutes";
import {
  trackingAdmin,
  trackingPublic,
  trackingStaff,
} from "~/features/tracking/routes/trackingRoutes";
import { pickUpOrderCustomer } from "~/features/pickUpOrder/routes/pickUpOrderRoutes";
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
];

const customerRoutes = [...shipmentCustomer, ...pickUpOrderCustomer];
const staffRoutes = [...trackingStaff];

export { publicRoutes, adminRoutes, customerRoutes, staffRoutes };
