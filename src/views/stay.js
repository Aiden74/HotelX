import React from "react";
import { Table } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class Stay extends React.Component {
  componentDidMount() {
    document.title = "Stay  - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Check In Date and Time</th>
              <th>Expected Check Out Date and Time</th>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Room Rate($/Day)</th>
              <th>Total Charge</th>
              <th>Payments Made</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Gunjan Gupta</td>
              <td>07-13-2020 11.00AM</td>
              <td>11-02-2020 7.00PM</td>
              <td>King</td>
              <td>312</td>
              <td>$66</td>
              <td>$132</td>
              <td>Credit Card-$132.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Joyce Silvera</td>
              <td>06-10-2020 08.00AM</td>
              <td>12-12-2020 07.00PM</td>
              <td>Double Queen</td>
              <td>212</td>
              <td>$80</td>
              <td>$5000</td>
              <td>Credit Card - $3000.00</td>
              <td>$2000.00</td>
            </tr>
            <tr>
              <td>Kina Bhut</td>
              <td>05-08-2019 11.00AM</td>
              <td>01-11-2020 7.00PM</td>
              <td>Double Queen with Kitchen</td>
              <td>200</td>
              <td>$100</td>
              <td>$10000</td>
              <td>Credit Card-$10000.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Rahul Sridhar</td>
              <td>11-01-2020 01.00PM</td>
              <td>01-31-2021 07.00PM</td>
              <td>Suite</td>
              <td>310</td>
              <td>$500</td>
              <td>$20000</td>
              <td>Credit Card-$15000.00</td>
              <td>$5000.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(Stay);
