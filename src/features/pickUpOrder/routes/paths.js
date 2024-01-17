import { home } from "~/config/homePath";

const pickUpOrder = home + "pick-up-order";

const pickUpOrderCustomer = pickUpOrder + "/customer";
const createOrder = pickUpOrderCustomer + "/create-order";
const listOrder = pickUpOrderCustomer + "/list-order";
const getOrder = pickUpOrderCustomer + "/get-order";
const getOrderWithId = pickUpOrderCustomer + "/get-order/:id";
// const trackingAdmin = tracking + "/admin";
// const trackingAdminDeleteTracking = trackingAdmin + "/delete-tracking/:staffId";

// const trackingStaff = tracking + "/staff";
// const trackingStaffAddTracking = trackingStaff + "/add-tracking";

export const paths = {
  pickUpOrder,
  pickUpOrderCustomer,
  createOrder,
  listOrder,
  getOrder,
  getOrderWithId,
};
