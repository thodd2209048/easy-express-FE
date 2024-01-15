import React from "react";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./ManageTracking.module.scss";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import { paths } from "~/features/tracking/routes/paths";

ManageTracking.propTypes = {};

function ManageTracking(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage hub" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={paths.trackingAdminDeleteTracking}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          Delete tracking
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ManageTracking;
