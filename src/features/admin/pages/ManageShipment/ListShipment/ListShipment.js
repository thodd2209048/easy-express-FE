import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./ListShipment.module.scss";
import { listShipment } from "../../../api/api";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import Paginate from "~/components/ui/Paginate/Paginate";
import SingleItemDisplay from "~/components/ui/SingleItemDisplay/SingleItemDisplay";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import FilterShipment from "./FilterShipment/FilterShipment";

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
      <SubContentLayout>
        <FilterShipment setCondition={setCondition} />
        {query.isSuccess &&
          query.data.data.content.map((shipment) => (
            <SingleItemDisplay
              key={shipment.id}
              item={shipment}
              keyInfo={shipment.number}
            >
              <div className="row">
                <div className="col">
                  <div className="">
                    <p className="m-0">
                      {shipment.lastTracking.shipmentStatus}
                    </p>
                    {!!shipment.lastTracking.hub && (
                      <p className="m-0">
                        Hub: {shipment.lastTracking.hub.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={clsx(styles.address, "row")}>
                <div className="col-6">
                  <p className="m-0">{shipment.senderName}</p>
                </div>
                <div className="col-6">
                  <p className="m-0">{shipment.receiverName}</p>
                </div>
              </div>
            </SingleItemDisplay>
          ))}
      </SubContentLayout>
      {query.isSuccess && (
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
