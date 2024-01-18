import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./ListOrders.module.scss";
import { listPickUpOrders } from "~/features/pickUpOrder/api/api";
import { paths } from "~/features/pickUpOrder/routes/paths";

import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import SingleItemDisplay from "~/components/ui/SingleItemDisplay/SingleItemDisplay";
import Paginate from "~/components/ui/Paginate/Paginate";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import FilterPickUpOrder from "./FilterPickUpOrder/FilterPickUpOrder";
import { convertZonedDateTimeToDateTime } from "~/utils/convertZonedDateTimeToDateTime";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import SingleItemDisplayWithMore from "~/components/ui/SingleItemDisplayWithMore/SingleItemDisplayWithMore";
import DisplayDistrictAndProvince from "~/components/ui/DisplayDistrictAndProvince/DisplayDistrictAndProvince";

ListOrders.propTypes = {};

function ListOrders(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });

  const query = useQuery({
    queryKey: ["pickUpOrders", condition],
    queryFn: () => listPickUpOrders(condition),
    staleTime: 1000 * 20,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (e) => {
    navigate(`${paths.listOrder}?page=${e.selected + 1}`);
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
        <FilterPickUpOrder setCondition={setCondition} />
        {query.isSuccess &&
          query.data.data.content.map((order) => (
            <SingleItemDisplayWithMore key={order.orderNumber} item={order}>
              <div className={clsx(styles.orderTitle)}>
                <span className="m-0 fw-bold">{order.orderNumber}</span>
                <Button
                  variant="outline-secondary"
                  className={clsx(styles.moreBtn, "border-0")}
                  onClick={() => navigate(`${paths.getOrder}/${order.id}`)}
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
              </div>
              <div className="information">
                <div className="row">
                  <div className="col">
                    <div className="">
                      <p className="m-0">Description: {order.description}</p>
                      <span className="m-0 ">{order.status}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="m-0">
                      From: {convertZonedDateTimeToDateTime(order.startTime)}
                    </p>
                  </div>{" "}
                  <div className="col">
                    <p className="m-0">
                      To: {convertZonedDateTimeToDateTime(order.endTime)}
                    </p>
                  </div>
                </div>
                <div className={clsx(styles.address, "row")}>
                  <div className="col">
                    <DisplayDistrictAndProvince
                      id={order.districtCode}
                      displayAsRow={true}
                    />
                  </div>
                </div>
              </div>
            </SingleItemDisplayWithMore>
          ))}
      </SubContentLayout>
      {query.isSuccess && query.data?.data.totalPages > 0 && (
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

export default ListOrders;
