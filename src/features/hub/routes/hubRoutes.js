import { paths } from "./paths";
import ManageHub from "~/features/hub/pages/admin/ManageHub/ManageHub";
import AddHub from "~/features/hub/pages/admin/ManageHub/AddHub/AddHub";
import ListHub from "~/features/hub/pages/admin/ManageHub/ListHub/ListHub";
import UpdateHub from "~/features/hub/pages/admin/ManageHub/UpdateHub/UpdateHub";

export const hubAdmin = [
  {
    path: paths.hubAdmin,
    component: ManageHub,
    child: [
      { path: paths.addHub, component: AddHub },
      { path: paths.listHub, component: ListHub },
      { path: paths.updateHub, component: UpdateHub },
    ],
  },
];
