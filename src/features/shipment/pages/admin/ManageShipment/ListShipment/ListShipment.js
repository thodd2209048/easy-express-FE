import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import styles from "./ListShipment.module.scss";
import { listShipment } from "~/features/shipment/api/api";

import FilterShipment from "./FilterShipment/FilterShipment";
import Paginate from "~/components/ui/Paginate/Paginate";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import SingleItemDisplayWithMore from "~/components/ui/SingleItemDisplayWithMore/SingleItemDisplayWithMore";

import { paths } from "~/features/shipment/routes/paths";

function ListShipment(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });

  const query = useQuery({
    queryKey: ["shipments", condition],
    queryFn: () => listShipment(condition),
    staleTime: 1000 * 20,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (e) => {
    navigate(`/admin-panel/shipment/list-shipment?page=${e.selected + 1}`);
  };

  useEffect(() => {
    let pageUrl = new URLSearchParams(location.search).get("page");
    if (pageUrl) {
      setCondition((prev) => ({ ...prev, page: pageUrl - 1 }));
    } else {
      setCondition((prev) => ({ ...prev, page: 0 }));
    }
  }, [location]);

  return (
    <>
      <FilterShipment setCondition={setCondition} />
      {query.isSuccess &&
        query.data.data.content.map((shipment) => (
          <SingleItemDisplayWithMore key={shipment.id} item={shipment}>
            <div className={clsx(styles.shipmentTitle)}>
              <span className="m-0 fw-bold">{shipment.number}</span>
              <Button
                variant="outline-secondary"
                className={clsx(styles.moreBtn, "border-0")}
                onClick={() =>
                  navigate(
                    `${paths.shipmentAdminGetShipment}/${shipment.number}`
                  )
                }
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </div>
            <div className="row">
              <div className="col">
                <div className="">
                  <p className="m-0">{shipment.lastTracking.shipmentStatus}</p>
                  {!!shipment.lastTracking.hub && (
                    <p className="m-0">Hub: {shipment.lastTracking.hub.name}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={clsx(styles.address, "row")}>
              <div className="col-6">
                <p className="m-0">
                  {shipment.senderDistrict.name}
                  {" - "}
                  {shipment.senderDistrict.province.name}
                </p>
              </div>
              <div className="col-6">
                <p className="m-0">
                  {shipment.receiverDistrict.name}
                  {" - "}
                  {shipment.receiverDistrict.province.name}
                </p>
              </div>
            </div>
          </SingleItemDisplayWithMore>
        ))}

      {query.isSuccess && query.data.data.totalPages > 0 && (
        <Paginate
          pageCount={query.data?.data.totalPages}
          handlePageClick={handlePageClick}
          currentPage={condition.page}
        />
      )}
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListShipment;
