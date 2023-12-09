import React from "react";
import PropTypes from "prop-types";
import PageTitle from "~/components/PageTitle/PageTitle";
import clsx from "clsx";

import styles from "./ManageHub.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import routes from "~/config/routes/routes";

ManageHub.propTypes = {};

function ManageHub(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage hub" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={routes.listHub}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          List hub
        </NavLink>
        <NavLink
          to={routes.addHub}
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

export default ManageHub;
