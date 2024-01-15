import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getPickUpOrder } from "~/features/pickUpOrder/api/api";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import { convertZonedDateTimeToDateTime } from "~/utils/convertZonedDateTimeToDateTime";
import { Button, Table } from "react-bootstrap";
import { paths } from "~/features/pickUpOrder/routes/paths";
import UpdatePickUpOrder from "../UpdatePickUpOrder/UpdatePickUpOrder";

GetOrder.propTypes = {};

function GetOrder(props) {
  const { id } = useParams();
  const [showUpdate, setShowUpdate] = useState(false);
  const { data, isSuccess } = useQuery({
    queryKey: ["pickUpOrder", id],
    queryFn: () => getPickUpOrder(id),
    staleTime: 1000 * 20,
  });

  return (
    <div className="row">
      <div className="col">
        <PageTitle title="Pick up order information" />
        <Button
          variant="secondary"
          className="mb-2"
          onClick={() => {
            setShowUpdate((prev) => !prev);
          }}
        >
          Update order
        </Button>
        {showUpdate && <UpdatePickUpOrder id={id} initData={data.data} />}
        {isSuccess && (
          <Table bordered hover>
            <tbody>
              <tr>
                <td>Order number</td>
                <td colSpan={3}>{data.data.orderNumber}</td>
              </tr>
              <tr>
                <th colSpan={5}>Contact</th>
              </tr>
              <tr>
                <td>Name</td>
                <td colSpan={3}>{data.data.senderName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td colSpan={3}>{data.data.senderPhone}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td colSpan={3}>{data.data.senderAddress}</td>
              </tr>
              <tr>
                <td>Region</td>
                <td colSpan={3}>
                  {data.data.district.name} - {data.data.district.province.name}
                </td>
              </tr>
              <tr>
                <th colSpan={5}>Time</th>
              </tr>
              <tr>
                <td>From</td>
                <td colSpan={3}>
                  {convertZonedDateTimeToDateTime(data.data.startTime)}
                </td>
              </tr>
              <tr>
                <td>To</td>
                <td colSpan={3}>
                  {convertZonedDateTimeToDateTime(data.data.endTime)}
                </td>
              </tr>
              <tr>
                <th colSpan={5}>Shipment details</th>
              </tr>
              <tr>
                <td>Description</td>
                <td colSpan={3}>{data.data.description}</td>
              </tr>
              <tr>
                <td>Weight (kg)</td>
                <td colSpan={3}>{data.data.weightInKg}</td>
              </tr>
              <tr>
                <td>Dimension (cm)</td>
                <td>{data.data.lengthInCm}</td>
                <td>{data.data.lengthInCm}</td>
                <td>{data.data.lengthInCm}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default GetOrder;
