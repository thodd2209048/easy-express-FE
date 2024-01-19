import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { listPickUpOrdersForAdmin } from "~/features/pickUpOrder/api/api";
import { paths } from "~/features/pickUpOrder/routes/paths";
import { convertZonedDateTimeToDateTime } from "~/utils/convertZonedDateTimeToDateTime";
import styles from "./ListOrdersForAdmin.module.scss";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import Paginate from "~/components/ui/Paginate/Paginate";
import SingleItemDisplayWithMore from "~/components/ui/SingleItemDisplayWithMore/SingleItemDisplayWithMore";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import FilterPickUpOrderForAdmin from "./FilterPickUpOrderForAdmin/FilterPickUpOrderForAdmin";
import DisplayHub from "~/features/hub/components/ui/DisplayHub/DisplayHub";

ListOrdersForAdmin.propTypes = {};

function ListOrdersForAdmin(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });

  const query = useQuery({
    queryKey: ["pickUpOrders", condition],
    queryFn: () => listPickUpOrdersForAdmin(condition),
    staleTime: 1000 * 20,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (e) => {
    navigate(`${paths.listOrderForAdmin}?page=${e.selected + 1}`);
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
      <SubContentLayout subTitle="List pick up orders">
        <FilterPickUpOrderForAdmin setCondition={setCondition} />
        {query.isSuccess &&
          query.data.data.content.map((order) => (
            <SingleItemDisplayWithMore key={order.orderNumber} item={order}>
              <div className={clsx(styles.orderTitle)}>
                <span className="m-0 fw-bold">{order.orderNumber}</span>
                <Button
                  variant="outline-secondary"
                  className={clsx(styles.moreBtn, "border-0")}
                  onClick={() =>
                    navigate(`${paths.getOrderForAdmin}/${order.id}`)
                  }
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
              </div>
              <div className="information">
                <div className="row">
                  <div className="col">
                    <div className="">
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
                    <DisplayHub id={order.hubId} />
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

export default ListOrdersForAdmin;
