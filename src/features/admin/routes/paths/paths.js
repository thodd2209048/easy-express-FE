import { home } from "~/routes/paths/paths";

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

const paths = {
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
  manageTracking,
};

export default paths;
