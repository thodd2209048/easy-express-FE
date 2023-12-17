const home = "/";
const test = home + "test";
const adminPanel = home + "admin-panel";
const hub = adminPanel + "/hub";
const addHub = hub + "/add-hub";
const listHub = hub + "/list-hub";
const updateHub = hub + "/update-hub/:hubId";
const manageStaff = adminPanel + "/staff";
const addStaff = manageStaff + "/add-staff";
const listStaff = manageStaff + "/list-staff";
const manageShipment = adminPanel + "/shipment";
const listShipment = manageShipment + "/list-shipment";
const manageTracking = adminPanel + "tracking";

const staff = home + "staff";
const addTracking = staff + "/add-tracking";

const shipment = home + "shipment";
const trackingShipment = home + "tracking";

const routes = {
  home,

  test,
  // Admin
  adminPanel,
  hub,
  addHub,
  listHub,
  updateHub,
  manageStaff,
  addStaff,
  listStaff,
  manageShipment,
  listShipment,
  staff,
  manageTracking,
  // staff
  addTracking,
  //  Customer
  shipment,
  trackingShipment,
};

export default routes;
