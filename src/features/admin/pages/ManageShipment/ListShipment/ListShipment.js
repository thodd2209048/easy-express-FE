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

function ListShipment(props) {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery({
    queryKey: ["staffs", page],
    queryFn: () => listShipment(page),
    staleTime: 1000 * 60 * 10,
  });
  const handlePageClick = (e) => {
    navigate(`/admin-panel/shipment/list-shipment?page=${e.selected + 1}`);
  };

  useEffect(() => {
    let pageUrl = new URLSearchParams(location.search).get("page") - 1;
    if (pageUrl) {
      setPage(pageUrl);
    }
    setPage();
  }, [location]);

  return (
    <>
      {query.isSuccess && (
        <SubContentLayout>
          {query.data.data.content.map((shipment) => (
            <SingleItemDisplay
              key={shipment.id}
              item={shipment}
              keyInfo={shipment.number}
            >
              <div className={clsx(styles.address, "row")}>
                <div className="col-6">
                  <p className="m-0">{shipment.senderName}</p>
                  <p className="m-0">{shipment.senderAddress}</p>
                </div>
                <div className="col-6">
                  <p className="m-0">{shipment.receiverName}</p>
                  <p className="m-0">{shipment.receiverAddress}</p>
                </div>
              </div>
            </SingleItemDisplay>
          ))}
        </SubContentLayout>
      )}
      {query.isSuccess && (
        <Paginate
          pageCount={query.data?.data.totalPages}
          handlePageClick={handlePageClick}
          currentPage={page}
        />
      )}
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListShipment;
