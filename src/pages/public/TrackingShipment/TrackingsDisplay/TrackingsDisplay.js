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
            <div className={clsx(styles.address)}>
              <span>{data.data.shipment.senderAddress}</span>
              <span>{data.data.shipment.receiverAddress}</span>
            </div>
            <p className="fw-bold fs-5 mt-3">
              {data.data.trackingList[0].status}
            </p>
            <p className="m-0">{data.data.trackingList[0].timeString}</p>
            <p className="m-0">{data.data.trackingList[0].hub.name}</p>
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
                keyInfo={tracking.status}
              >
                <p className="m-0">{tracking.timeString}</p>
                <p className="m-0">{tracking.hub.name}</p>
              </SingleItemDisplay>
            ))}
        </div>
      )}
    </div>
  );
}

export default TrackingsDisplay;
