import { home } from "~/config/homePath";

const tracking = home + "tracking";
const trackingAdmin = tracking + "/admin";
const trackingAdminDeleteTracking = trackingAdmin + "/delete-tracking/:staffId";

const trackingStaff = tracking + "/staff";
const trackingStaffAddTracking = trackingStaff + "/add-tracking";

export const paths = {
  tracking,
  trackingAdmin,
  trackingAdminDeleteTracking,
  trackingStaff,
  trackingStaffAddTracking,
};
