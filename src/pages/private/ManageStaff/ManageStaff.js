import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./ManageStaff.module.scss";
import routes from "~/config/routes/routes";

import PageTitle from "~/components/PageTitle/PageTitle";

ManageStaff.propTypes = {};

function ManageStaff(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage staff" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={routes.addStaff}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          Add staff
        </NavLink>
        <NavLink
          to={routes.listStaff}
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
