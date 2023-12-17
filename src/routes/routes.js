import routes from "~/config/routes/routes";
import AddTracking from "~/pages/private/AddTracking/AddTracking";
import AdminManageTracking from "~/pages/private/AdminManageTracking/AdminManageTracking";
import AdminPanel from "~/pages/private/AdminPanel/AdminPanel";
import AddHub from "~/pages/private/ManageHub/AddHub/AddHub";
import ListHub from "~/pages/private/ManageHub/ListHub/ListHub";
import ManageHub from "~/pages/private/ManageHub/ManageHub";
import UpdateHub from "~/pages/private/ManageHub/UpdateHub/UpdateHub";
import ListShipment from "~/pages/private/ManageShipment/ListShipment/ListShipment";
import ManageShipment from "~/pages/private/ManageShipment/ManageShipment";
import AddStaff from "~/pages/private/ManageStaff/AddStaff/AddStaff";
import ListStaff from "~/pages/private/ManageStaff/ListStaff/ListStaff";
import ManageStaff from "~/pages/private/ManageStaff/ManageStaff";

import CreateShipment from "~/pages/public/CreateShipment/CreateShipment";
import Home from "~/pages/public/Home/Home";
import TrackingShipment from "~/pages/public/TrackingShipment/TrackingShipment";
import Test from "~/test/Test/Test";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.shipment, component: CreateShipment },
  { path: routes.trackingShipment, component: TrackingShipment },
  { path: routes.test, component: Test },
];
const privateRoutes = [
  { path: routes.adminPanel, component: AdminPanel },
  {
    path: routes.hub,
    component: ManageHub,
    child: [
      {
        path: routes.addHub,
        component: AddHub,
      },
      {
        path: routes.listHub,
        component: ListHub,
      },
      {
        path: routes.updateHub,
        component: UpdateHub,
      },
    ],
  },
  {
    path: routes.manageStaff,
    component: ManageStaff,
    child: [
      {
        path: routes.addStaff,
        component: AddStaff,
      },
      {
        path: routes.listStaff,
        component: ListStaff,
      },
    ],
  },
  {
    path: routes.manageShipment,
    component: ManageShipment,
    child: [
      {
        path: routes.listShipment,
        component: ListShipment,
      },
    ],
  },
  {
    path: routes.manageTracking,
    component: AdminManageTracking,
    // child: [
    //   {
    //     path: routes.listShipment,
    //     component: ListShipment,
    //   },
    // ],
  },
  {
    path: routes.addTracking,
    component: AddTracking,
  },
];

export { privateRoutes, publicRoutes };
