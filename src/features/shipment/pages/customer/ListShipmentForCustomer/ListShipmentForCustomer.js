import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import images from "~/assets/images";
import DisplayDistrictAndProvince from "~/components/ui/DisplayDistrictAndProvince/DisplayDistrictAndProvince";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import Paginate from "~/components/ui/Paginate/Paginate";
import SingleItemDisplayWithMore from "~/components/ui/SingleItemDisplayWithMore/SingleItemDisplayWithMore";
import TopImage from "~/components/ui/TopImage/TopImage";
import { listShipmentForCustomer } from "~/features/shipment/api/api";
import { paths } from "~/features/shipment/routes/paths";
import FilterShipmentForCustomer from "./FilterShipmentForCustomer/FilterShipmentForCustomer";
import styles from "./ListShipmentForCustomer.module.scss";

function ListShipmentForCustomer(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });

  const query = useQuery({
    queryKey: ["shipmentsForCustomer", condition],
    queryFn: () => listShipmentForCustomer(condition),
    staleTime: 1000 * 20,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (e) => {
    navigate(`${paths.shipmentCustomerListShipment}?page=${e.selected + 1}`);
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
    <div className={clsx(styles.wrapper, "mt-2")}>
      <TopImage image={images.top.shipment} title={"Your shipments"} />
      <FilterShipmentForCustomer setCondition={setCondition} />

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
                    `${paths.shipmentCustomerGetShipment}/${shipment.number}`
                  )
                }
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <Col xs={6} md={2}>
                    <p className="m-0">Description:</p>
                  </Col>
                  <Col xs={6} md={2}>
                    <p className="m-0">{shipment.description}</p>
                  </Col>
                </div>
                <Row>
                  <Col xs={6} md={2}>
                    <p className="m-0">Weight:</p>
                  </Col>
                  <Col xs={6} md={2}>
                    <p className="m-0">{shipment.weightInKg} kg</p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={clsx(styles.address, "row")}>
              <div className="col-6">
                <DisplayDistrictAndProvince id={shipment.senderDistrictCode} />
              </div>
              <div className="col-6">
                <DisplayDistrictAndProvince
                  id={shipment.receiverDistrictCode}
                />
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
    </div>
  );
}

export default ListShipmentForCustomer;
