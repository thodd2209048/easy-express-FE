import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./AdminPanel.module.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "~/components/PageTitle/PageTitle";
import routes from "~/config/routes/routes";

AdminPanel.propTypes = {};

function AdminPanel(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link) => {
    navigate(`${location.pathname}${link}`);
  };
  return (
    <div className="container">
      <div className="row">
        <PageTitle title="AdminPanel" />
      </div>
      <div className="row">
        <div className={clsx(styles.options)}>
          <NavLink
            to={routes.hub}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Hub
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
