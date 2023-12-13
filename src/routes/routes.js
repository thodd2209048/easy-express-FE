import routes from "~/config/routes/routes";
import AdminPanel from "~/pages/private/AdminPanel/AdminPanel";
import AddHub from "~/pages/private/ManageHub/AddHub/AddHub";
import ListHub from "~/pages/private/ManageHub/ListHub/ListHub";
import ManageHub from "~/pages/private/ManageHub/ManageHub";
import UpdateHub from "~/pages/private/ManageHub/UpdateHub/UpdateHub";
import AddStaff from "~/pages/private/ManageStaff/AddStaff/AddStaff";
import ListStaff from "~/pages/private/ManageStaff/ListStaff/ListStaff";
import ManageStaff from "~/pages/private/ManageStaff/ManageStaff";
import Test from "~/pages/private/Test/Test";
import CreateShipment from "~/pages/public/CreateShipment/CreateShipment";
import Home from "~/pages/public/Home/Home";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.shipment, component: CreateShipment },
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
    path: routes.staff,
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
];

export { privateRoutes, publicRoutes };
