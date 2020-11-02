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
                        <td>
                        <th>310</th>
                        <th></th>
                        <th>07-31-2020</th>
                        <th>10-31-2020</th>
                        <th>$840</th>
                        </td>

                        <td>
                        <th>15</th>
                        <th></th>
                        <th>09-31-2020</th>
                        <th>Occupied</th>
                        <th>$530</th>
                        </td>
                    </tr>
                </tbody>

            </Table>
        
        </div>

    );
}
}
export default withStyles(styles)(Report);
  