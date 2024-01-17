import AddStaff from "../pages/admin/ManageStaff/AddStaff/AddStaff";
import ListStaff from "../pages/admin/ManageStaff/ListStaff/ListStaff";
import ManageStaff from "../pages/admin/ManageStaff/ManageStaff";
import UpdateStaff from "../pages/admin/ManageStaff/UpdateStaff/UpdateStaff";
import { paths } from "./paths";

export const staffAdmin = [
  {
    path: paths.staffAdmin,
    component: ManageStaff,
    child: [
      { path: paths.addStaff, component: AddStaff },
      { path: paths.listStaff, component: ListStaff },
      { path: paths.updateStaff, component: UpdateStaff },
    ],
  },
];
