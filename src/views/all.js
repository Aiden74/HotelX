import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Table } from "react-bootstrap";

const styles = (theme) => ({
  //Add your styles here
});
class AllRooms extends React.Component {
  componentDidMount() {
    document.title = "All Rooms - HotelX";
  }

  getDate(num) {
    var date = new Date();
    date.setDate(date.getDate() + num);
    return date.toLocaleDateString();
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
              <th>{this.getDate(1)}</th>
              <th>{this.getDate(2)}</th>
              <th>{this.getDate(3)}</th>
              <th>{this.getDate(4)}</th>
              <th>{this.getDate(5)}</th>
              <th>{this.getDate(6)}</th>
              <th>{this.getDate(7)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>221</td>
              <td>Aiden Hadisi</td>
              <td>John Doe</td>
              <td>Donald Duck</td>
              <td>Jane Doe</td>
            </tr>
            <tr>
              <td>222</td>
              <td>Mickey Mouse</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(AllRooms);
