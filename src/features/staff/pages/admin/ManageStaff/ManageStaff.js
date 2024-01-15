import React from "react";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./ManageStaff.module.scss";

import PageTitle from "~/components/ui/PageTitle/PageTitle";
import { paths } from "~/features/staff/routes/paths";

ManageStaff.propTypes = {};

function ManageStaff(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage staff" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={paths.addStaff}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          Add staff
        </NavLink>
        <NavLink
          to={paths.listStaff}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          List staff
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ManageStaff;
