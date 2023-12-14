import clsx from "clsx";

import { NavLink } from "react-router-dom";
import PageTitle from "~/components/PageTitle/PageTitle";
import routes from "~/config/routes/routes";
import styles from "./AdminPanel.module.scss";

AdminPanel.propTypes = {};

function AdminPanel(props) {
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
          <NavLink
            to={routes.staff}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Staff
          </NavLink>
          <NavLink
            to={routes.manageShipment}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Shipment
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
