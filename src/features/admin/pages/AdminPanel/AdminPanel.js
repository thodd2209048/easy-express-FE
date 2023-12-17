import clsx from "clsx";

import { NavLink, Outlet, Route } from "react-router-dom";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import paths from "~/routes/paths/paths";
import styles from "./AdminPanel.module.scss";
import adminRoutes from "../../routes/adminRoutes";

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
            to={paths.hub}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Hub
          </NavLink>
          <NavLink
            to={paths.manageStaff}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Staff
          </NavLink>
          <NavLink
            to={paths.manageShipment}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "btn btn-outline-info"
            }
          >
            Shipment
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminPanel;
