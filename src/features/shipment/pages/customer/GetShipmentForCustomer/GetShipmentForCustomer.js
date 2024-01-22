import { useQuery } from "@tanstack/react-query";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import images from "~/assets/images";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import TopImage from "~/components/ui/TopImage/TopImage";
import { getShipment } from "~/features/shipment/api/api";

GetShipmentForCustomer.propTypes = {};

function GetShipmentForCustomer(props) {
  let { number } = useParams();
  const query = useQuery({
    queryKey: ["shipment", number],
    queryFn: () => getShipment(number),
  });

  return (
    <div>
      <TopImage image={images.top.shipment} />
      {query.isSuccess && (
        <div className="mt-4">
          <h3 className="m-0">{`Shipment ${number}`}</h3>
          <Table bordered hover className="mt-2">
            <tbody>
              {/* --------------- FROM --------------- */}
              <tr>
                <th colSpan={5}>From</th>
              </tr>
              <tr>
                <td className="col-3">Sender name</td>
                <td colSpan={3}>{query.data.data.senderName}</td>
              </tr>
              <tr>
                <td className="col-3">Sender phone</td>
                <td colSpan={3}>{query.data.data.senderPhone}</td>
              </tr>
              <tr>
                <td className="col-3">Sender address</td>
                <td colSpan={3}>{query.data.data.senderAddress}</td>
              </tr>
              <tr>
                <td className="col-3">Sender region</td>
                <td colSpan={3}>
                  {query.data.data.senderDistrict.name}
                  {" - "}
                  {query.data.data.senderDistrict.province.name}
                </td>
              </tr>
              {/* --------------- TO --------------- */}
              <tr>
                <th colSpan={5}>To</th>
              </tr>
              <tr>
                <td className="col-3">Receiver name</td>
                <td colSpan={3}>{query.data.data.receiverName}</td>
              </tr>
              <tr>
                <td className="col-3">Receiver phone</td>
                <td colSpan={3}>{query.data.data.receiverPhone}</td>
              </tr>
              <tr>
                <td className="col-3">Receiver address</td>
                <td colSpan={3}>{query.data.data.receiverAddress}</td>
              </tr>
              <tr>
                <td className="col-3">Receiver region</td>
                <td colSpan={3}>
                  {query.data.data.receiverDistrict.name}
                  {" - "}
                  {query.data.data.receiverDistrict.province.name}
                </td>
              </tr>
              {/* --------------- SHIPMENT DETAILS --------------- */}
              <tr>
                <th colSpan={5}>Shipment details</th>
              </tr>
              <tr>
                <td>Description</td>
                <td colSpan={3}>{query.data.data.description}</td>
              </tr>
              <tr>
                <td>Weight (kg)</td>
                <td colSpan={3}>{query.data.data.weightInKg}</td>
              </tr>
              <tr>
                <td>Dimension (cm)</td>
                <td>{query.data.data.lengthInCm}</td>
                <td>{query.data.data.lengthInCm}</td>
                <td>{query.data.data.lengthInCm}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
      <NotificationApi response={query} showSuccess={false} />
    </div>
  );
}

export default GetShipmentForCustomer;
