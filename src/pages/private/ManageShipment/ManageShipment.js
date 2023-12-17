import React from "react";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./ManageShipment.module.scss";
import routes from "~/config/routes/routes";

import PageTitle from "~/components/ui/PageTitle/PageTitle";

ManageShipment.propTypes = {};

function ManageShipment(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage shipment" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={routes.listShipment}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          List shipment
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ManageShipment;
