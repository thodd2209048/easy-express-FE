import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DisplayDistrictAndProvince from "~/components/ui/DisplayDistrictAndProvince/DisplayDistrictAndProvince";
import PageTitle from "~/components/ui/PageTitle/PageTitle";
import { getPickUpOrder } from "~/features/pickUpOrder/api/api";
import { closedPickUpOrderStatuses } from "~/features/pickUpOrder/config/constant";
import { convertZonedDateTimeToDateTime } from "~/utils/convertZonedDateTimeToDateTime";
import UpdatePickUpOrderForStaff from "../UpdatePickUpOrderForStaff/UpdatePickUpOrderForStaff";

GetOrderForStaff.propTypes = {};

function GetOrderForStaff(props) {
  const { id } = useParams();
  const [showUpdate, setShowUpdate] = useState(false);
  const [isDisableUpdate, setIsDisableUpdate] = useState(false);

  const { data, isSuccess } = useQuery({
    queryKey: ["pickUpOrder", id],
    queryFn: () => getPickUpOrder(id),
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    const now = new Date();
    const startPickUpTime = new Date(data?.data.startTime * 1000);

    let isValidToChangePickUpOrderNow =
      startPickUpTime - now > 1 * 60 * 60 * 1000;

    setIsDisableUpdate(
      closedPickUpOrderStatuses.includes(data?.data.status) ||
        !isValidToChangePickUpOrderNow
        ? true
        : false
    );
  }, [data]);

  return (
    <div className="row">
      <div className="col">
        <PageTitle title="Pick up order information" />
        <div className="d-flex gap-2">
          <Button
            variant="secondary"
            className="mb-2"
            onClick={() => {
              setShowUpdate((prev) => !prev);
            }}
            disabled={isDisableUpdate}
          >
            Update order
          </Button>
        </div>
        {showUpdate && (
          <UpdatePickUpOrderForStaff
            id={id}
            initData={data?.data}
            setShowUpdate={() => setShowUpdate()}
          />
        )}
        {isSuccess && (
          <Table bordered hover>
            <tbody>
              <tr>
                <td>Order number</td>
                <td colSpan={3}>{data.data.orderNumber}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td colSpan={3}>{data.data.status}</td>
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
                  <DisplayDistrictAndProvince id={data.data.provinceCode} />
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

export default GetOrderForStaff;
