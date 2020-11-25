import React from "react";
import { Table } from "react-bootstrap";
class CurrentStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomInfo: null,
    };
  }
  componentDidMount() {
    document.title = "Current Status - HotelX";
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    if (!rooms) {
      rooms = {
        101: {
          type: "King",
          status: "Available",
          guest: null,
        },
        102: {
          type: "King",
          status: "Available",
          guest: null,
        },
        103: {
          type: "Queen",
          status: "Available",
          guest: null,
        },
        104: {
          type: "Double Queen",
          status: "Available",
          guest: null,
        },
        105: {
          type: "King",
          status: "Available",
          guest: null,
        },
      };
      localStorage.setItem("rooms", JSON.stringify(rooms));
    }
    this.setState({ roomInfo: rooms });
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
              <td>Profile</td>
            </tr>
          </thead>
          <tbody>
            {this.state.roomInfo &&
              Object.keys(this.state.roomInfo).map((key, i) => (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{this.state.roomInfo[key].type}</td>
                  <td>{this.state.roomInfo[key].status}</td>
                  <td>
                    <a href={`stay/${key}`}>Stay</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CurrentStatus;
