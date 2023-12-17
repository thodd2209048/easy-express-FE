import paths from "~/routes/paths/paths";
import AddTracking from "~/pages/private/AddTracking/AddTracking";

import CreateShipment from "~/pages/public/CreateShipment/CreateShipment";
import Home from "~/pages/public/Home/Home";
import TrackingShipment from "~/pages/public/TrackingShipment/TrackingShipment";
import Test from "~/test/Test/Test";

const publicRoutes = [
  { path: paths.home, component: Home },
  { path: paths.shipment, component: CreateShipment },
  { path: paths.trackingShipment, component: TrackingShipment },
  { path: paths.test, component: Test },
];
const privateRoutes = [
  {
    path: paths.addTracking,
    component: AddTracking,
  },
];

export { privateRoutes, publicRoutes };
