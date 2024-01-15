import DeleteTracking from "../pages/admin/ManageTracking/DeleteTracking/DeleteTracking";
import ManageTracking from "../pages/admin/ManageTracking/ManageTracking";
import TrackingShipment from "../pages/public/TrackingShipment/TrackingShipment";
import AddTracking from "../pages/staff/AddTracking/AddTracking";
import { paths } from "./paths";

export const trackingAdmin = [
  {
    path: paths.trackingAdmin,
    component: ManageTracking,
    child: [
      { path: paths.trackingAdminDeleteTracking, component: DeleteTracking },
    ],
  },
];

export const trackingStaff = [
  { path: paths.trackingStaffAddTracking, component: AddTracking },
];

export const trackingPublic = [
  { path: paths.tracking, component: TrackingShipment },
];
