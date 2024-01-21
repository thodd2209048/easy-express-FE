import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./ManageOrder.module.scss";

import PageTitle from "~/components/ui/PageTitle/PageTitle";
import { paths } from "~/features/pickUpOrder/routes/paths";

ManageOrder.propTypes = {};

function ManageOrder(props) {
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <div className="row">
        <PageTitle title="Manage pick up order" />
      </div>
      <div className={clsx(styles.options)}>
        <NavLink
          to={paths.listOrderForAdmin}
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
        >
          List pick up orders
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ManageOrder;
