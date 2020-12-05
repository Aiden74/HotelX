import React from "react";
import { Table } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { SettingsBluetoothSharp } from "@material-ui/icons";

const styles = (theme) => ({
  //Add your styles here
});
class Housekeeping extends React.Component {
  componentDidMount() {
    document.title = "Housekeeping - HotelX";
  }
  

  render() {
    const { classes } = this.props;
    //Add your code here

    const guest = [
      {houseKeepName: "Aiden", roomNumber: 310, type: "King", status: "Unavailable", bathroom: "Clean", towels: 2, bedSheets: 2, vaccum: "Clean", dusting: "Needs cleaning", electronics: "Need fixing"},
      {houseKeepName: "Kirti Chaudhari", roomNumber: 312, type: "Double Queen", status: "Unavailable", bathroom: "Clean", towels: 1, bedSheets: 2, vaccum: "Dirty", dusting: "Needs cleaning", electronics: "Up to date"},
      {houseKeepName: "Jose A", roomNumber: 200, type: "King", status: "Unavailable", bathroom: "Clean", towels: 1, bedSheets: 0, vaccum: "Dirty", dusting: "Needs cleaning", electronics: "Need fixing"},
      {houseKeepName: "John Doe", roomNumber: 201, type: "Double Queen", status: "Unavailable", bathroom: "Clean", towels: 2, bedSheets: 1, vaccum: "Clean", dusting: "None", electronics: "Need fixing"}
    ]

    const renderGuest = (guest, index) => {
      return(
        
        <tr key={index}>
          <td> <input type = "checkbox"/> {guest.houseKeepName}</td>
          <td>{guest.roomNumber}</td>
          <td>{guest.type}</td>
          <td> <input type = "checkbox"/> {guest.status}</td>
          <td> <input type = "checkbox"/> {guest.bathroom}</td>
          <td> <input type = "checkbox"/> {guest.towels}</td>
          <td> <input type = "checkbox"/> {guest.bedSheets}</td>
          <td> <input type = "checkbox"/> {guest.vaccum}</td>
          <td> <input type = "checkbox"/> {guest.dusting}</td>
          <td> <input type = "checkbox"/> {guest.electronics}</td>
        </tr>
        
      )
    }

    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Housekeep Name</th>
              <th>Room Number</th>
              <th>Type</th>
              <th>Status</th>
              <th>Bathroom</th>
              <th>Towels</th>
              <th>Bed Sheets</th>
              <th>Vacuum</th>
              <th>Dusting</th>
              <th>Electronics</th>
            </tr>
          </thead>
          <tbody>
            {guest.map(renderGuest)}
          </tbody>

        </Table>
        
      </div>
      
    );
  }
}

export default withStyles(styles)(Housekeeping);
