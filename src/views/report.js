import React from "react";
import { Table } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class Report extends React.Component {
  componentDidMount() {
    document.title = "Daily Report  - HotelX";
  }
  render() {
    const { classes } = this.props;
    //Add your code here
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Guest Name</th>
              <th>Date Inr</th>
              <th>Date Out</th>
              <th>Amount Paid for the room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>310</td>
              <td>Mickey Mouse</td>
              <td>07-31-2020</td>
              <td>10-31-2020</td>
              <td>$840</td>
            </tr>
            <tr>
              <td>320</td>
              <td>John Doe</td>
              <td>08-10-2020</td>
              <td>08-15-2020</td>
              <td>$520</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withStyles(styles)(Report);
