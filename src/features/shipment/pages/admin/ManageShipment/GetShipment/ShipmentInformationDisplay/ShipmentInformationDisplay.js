import { Table } from "react-bootstrap";

ShipmentInformationDisplay.propTypes = {};

function ShipmentInformationDisplay({ data }) {
  return (
    <div>
      <Table bordered hover>
        <tbody>
          {/* --------------- FROM --------------- */}
          <tr>
            <th colSpan={5}>From</th>
          </tr>
          <tr>
            <td className="col-3">Sender name</td>
            <td colSpan={3}>{data.senderName}</td>
          </tr>
          <tr>
            <td className="col-3">Sender phone</td>
            <td colSpan={3}>{data.senderPhone}</td>
          </tr>
          <tr>
            <td className="col-3">Sender address</td>
            <td colSpan={3}>{data.senderAddress}</td>
          </tr>
          <tr>
            <td className="col-3">Sender region</td>
            <td colSpan={3}>
              {data.senderDistrict.name}
              {" - "}
              {data.senderDistrict.province.name}
            </td>
          </tr>
          {/* --------------- TO --------------- */}
          <tr>
            <th colSpan={5}>To</th>
          </tr>
          <tr>
            <td className="col-3">Receiver name</td>
            <td colSpan={3}>{data.receiverName}</td>
          </tr>
          <tr>
            <td className="col-3">Receiver phone</td>
            <td colSpan={3}>{data.receiverPhone}</td>
          </tr>
          <tr>
            <td className="col-3">Receiver address</td>
            <td colSpan={3}>{data.receiverAddress}</td>
          </tr>
          <tr>
            <td className="col-3">Receiver region</td>
            <td colSpan={3}>
              {data.receiverDistrict.name}
              {" - "}
              {data.receiverDistrict.province.name}
            </td>
          </tr>
          {/* --------------- SHIPMENT DETAILS --------------- */}
          <tr>
            <th colSpan={5}>Shipment details</th>
          </tr>
          <tr>
            <td>Description</td>
            <td colSpan={3}>{data.description}</td>
          </tr>
          <tr>
            <td>Weight (kg)</td>
            <td colSpan={3}>{data.weightInKg}</td>
          </tr>
          <tr>
            <td>Dimension (cm)</td>
            <td>{data.lengthInCm}</td>
            <td>{data.lengthInCm}</td>
            <td>{data.lengthInCm}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ShipmentInformationDisplay;
