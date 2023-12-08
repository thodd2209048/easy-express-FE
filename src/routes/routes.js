import config from "~/config";
import Home from "~/pages/public/Home/Home";
import AdminPanel from "~/pages/private/AdminPanel/AdminPanel";

const publicRoutes = [{ path: config.routes.home, component: Home }];
const privateRoutes = [
  { path: config.routes.adminPanel, component: AdminPanel },
];

export { publicRoutes, privateRoutes };
