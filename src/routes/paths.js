import { home } from "~/config/homePath";
import { paths as hubPaths } from "~/features/hub/routes/paths";
import { paths as staffPaths } from "~/features/staff/routes/paths";
import { paths as shipmentPaths } from "~/features/shipment/routes/paths";
import { paths as trackingPaths } from "~/features/tracking/routes/paths";
import { paths as pickUpOrderPaths } from "~/features/pickUpOrder/routes/paths";

const trackingShipment = home + "tracking";

const paths = {
  home,
  trackingShipment,
  ...hubPaths,
  ...staffPaths,
  ...shipmentPaths,
  ...trackingPaths,
  ...pickUpOrderPaths,
};

export default paths;
