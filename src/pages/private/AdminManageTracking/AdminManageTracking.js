import React from "react";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./AdminManageTracking.module.scss";
import paths from "~/routes/paths/paths";

import PageTitle from "~/components/ui/PageTitle/PageTitle";

AdminManageTracking.propTypes = {};

function AdminManageTracking(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage hub" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={paths.listHub}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          List hub
        </NavLink>
        <NavLink
          to={paths.addHub}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          Add hub
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminManageTracking;
