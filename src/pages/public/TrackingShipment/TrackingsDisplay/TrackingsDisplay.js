import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import axios from "axios";

import { listTrackingOfShipment } from "~/api/api";
import styles from "./TrackingsDisplay.module.scss";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import SingleItemDisplay from "~/components/ui/SingleItemDisplay/SingleItemDisplay";
import DropDownHead from "~/components/ui/DropDownHead/DropDownHead";
import { Col } from "react-bootstrap";
import { convertZonedDateTimeToDateTime } from "~/utils/convertZonedDateTimeToDateTime";

TrackingsDisplay.propTypes = {
  number: PropTypes.string,
};

function TrackingsDisplay({ number }) {
  const { isSuccess, data, ...query } = useQuery({
    queryKey: ["trackingShipment", number],
    queryFn: () => listTrackingOfShipment(number),
  });
  const [showAllTracking, setShowAllTracking] = useState(false);

  const handleShowAllUpdates = () => {
    setShowAllTracking((prev) => !prev);
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <NotificationApi
        response={{ isSuccess, data, ...query }}
        showSuccess={false}
      />

      {isSuccess && (
        <div className="border rounded">
          <div className="p-2">
            <p className="m-0">Tracking number: {number}</p>
            <div className={clsx(styles.addresses, "row")}>
              <Col className="d-flex flex-column flex-md-row">
                <span>{data.data.shipment.senderDistrict.name}</span>
                <span className="d-none d-md-block">{"-"}</span>
                <span>{data.data.shipment.senderDistrict.province.name}</span>
              </Col>
              <Col className="d-flex flex-column flex-md-row">
                <span>{data.data.shipment.receiverDistrict.name}</span>
                <span className="d-none d-md-block">{"-"}</span>
                <span>{data.data.shipment.receiverDistrict.province.name}</span>
              </Col>
            </div>
            <p className="fw-bold fs-5 mt-3">
              {data.data.trackingList[0].shipmentStatus}
            </p>

            <p className="m-0">
              {convertZonedDateTimeToDateTime(
                data.data.trackingList[0].createdAt
              )}
            </p>
            {/* <p className="m-0">{data.data.trackingList[0].hub.name}</p> */}
          </div>

          <DropDownHead
            title={"All Shipment Updates"}
            toggleDrop={handleShowAllUpdates}
            isDrop={showAllTracking}
            className={"fw-bold fs-5 border-top"}
          />

          {showAllTracking &&
            data.data.trackingList.map((tracking) => (
              <SingleItemDisplay
                className={clsx(styles.trackingItem)}
                key={tracking.id}
                keyInfo={tracking.shipmentStatus}
              >
                <p className="m-0">
                  {convertZonedDateTimeToDateTime(tracking.createdAt)}
                </p>
                <p className="m-0">
                  {tracking.district.name}-{tracking.district.province.name}
                </p>
              </SingleItemDisplay>
            ))}
        </div>
      )}
    </div>
  );
}

export default TrackingsDisplay;
