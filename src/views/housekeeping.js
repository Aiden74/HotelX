import React from "react";
import { Table } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

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
          <tr>
              <td>Aiden</td>
              <td>310</td>
              <td>King</td>
              <td>Available</td>
              <td>clean</td>
              <td>2</td>
              <td>2</td>
              <td>Clean</td>
              <td>need to Clean</td>
              <td>Needs to fix</td>
            </tr>

            <tr>
              <td>Kirti Chaudhari</td>
              <td>312</td>
              <td>Double Queen</td>
              <td>Unavailable</td>
              <td>occupied</td>
              <td>1</td>
              <td>2</td>
              <td>Unclean</td>
              <td>Need to clean</td>
              <td>Up to date</td>
            </tr>
          <tr>
              <td>Jose A</td>
              <td>200</td>
              <td>Double queen with Kitchen</td>
              <td>Unavailable</td>
              <td>Dirty</td>
              <td>1</td>
              <td>0</td>
              <td>Unclean</td>
              <td>Need to clean</td>
              <td>Need to fix</td>
            </tr>
            <tr>
              <td>Michael Silvera</td>
              <td>215</td>
              <td>Suite</td>
              <td>Unavailable</td>
              <td>Maintenance</td>
              <td>2</td>
              <td>2</td>
              <td>Unclean</td>
              <td>Need to clean</td>
              <td>Up to date</td>
            </tr>
          </tbody>

        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(Housekeeping);
