import React from "react";
import { Table } from "react-bootstrap";
class CurrentStatus extends React.Component {
  componentDidMount() {
    document.title = "Current Status - HotelX";
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>221</td>
              <td>Double Queen</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>222</td>
              <td>King</td>
              <td>Occupied</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CurrentStatus;
