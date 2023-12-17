import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AddHub from "../pages/ManageHub/AddHub/AddHub";
import ListHub from "../pages/ManageHub/ListHub/ListHub";
import ManageHub from "../pages/ManageHub/ManageHub";
import UpdateHub from "../pages/ManageHub/UpdateHub/UpdateHub";
import ListShipment from "../pages/ManageShipment/ListShipment/ListShipment";
import ManageShipment from "../pages/ManageShipment/ManageShipment";
import AddStaff from "../pages/ManageStaff/AddStaff/AddStaff";
import ListStaff from "../pages/ManageStaff/ListStaff/ListStaff";
import ManageStaff from "../pages/ManageStaff/ManageStaff";
import paths from "./paths/paths";
import ManageTracking from "~/features/admin/pages/ManageTracking/ManageTracking";

const adminRoutes = [
  { path: paths.adminPanel, component: AdminPanel },
  // Hub
  {
    path: paths.hub,
    component: ManageHub,
    child: [
      { path: paths.addHub, component: AddHub },
      { path: paths.listHub, component: ListHub },
      { path: paths.updateHub, component: UpdateHub },
    ],
  },
  // Staff
  {
    path: paths.manageStaff,
    component: ManageStaff,
    child: [
      { path: paths.addStaff, component: AddStaff },
      { path: paths.listStaff, component: ListStaff },
    ],
  },
  // Shipment
  {
    path: paths.manageShipment,
    component: ManageShipment,
    child: [{ path: paths.listShipment, component: ListShipment }],
  },
  // Tracking
  { path: paths.manageTracking, component: ManageTracking },
];

export default adminRoutes;
