import config from "~/config";
import Home from "~/pages/public/Home/Home";
import AdminPanel from "~/pages/private/AdminPanel/AdminPanel";
import ManageHub from "~/pages/private/ManageHub/ManageHub";
import AddHub from "~/pages/private/ManageHub/AddHub/AddHub";
import ListHub from "~/pages/private/ManageHub/ListHub/ListHub";

const publicRoutes = [{ path: config.routes.home, component: Home }];
const privateRoutes = [
  { path: config.routes.adminPanel, component: AdminPanel },
  {
    path: config.routes.hub,
    component: ManageHub,
    child: [
      {
        path: config.routes.addHub,
        component: AddHub,
      },
      {
        path: config.routes.listHub,
        component: ListHub,
      },
    ],
  },
];

export { publicRoutes, privateRoutes };
