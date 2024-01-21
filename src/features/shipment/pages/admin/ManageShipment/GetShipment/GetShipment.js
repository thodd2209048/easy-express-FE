import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getShipment } from "~/features/shipment/api/api";
import Section from "~/components/ui/Section/Section";
import { useParams } from "react-router-dom";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import { Table } from "react-bootstrap";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import ShipmentInformationDisplay from "./ShipmentInformationDisplay/ShipmentInformationDisplay";

GetShipment.propTypes = {};

function GetShipment(props) {
  let { number } = useParams();
  const query = useQuery({
    queryKey: ["shipment", number],
    queryFn: () => getShipment(number),
  });

  return (
    <div>
      <SubContentLayout subTitle={`Shipment ${number}`} />
      {query.isSuccess && <ShipmentInformationDisplay data={query.data.data} />}
      <NotificationApi response={query} showSuccess={false} />
    </div>
  );
}

export default GetShipment;
