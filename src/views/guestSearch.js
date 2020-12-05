import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
const styles = (theme) => ({
  //Add your styles here
  form: {
    maxWidth: "500px",
    marginBottom: "3rem",
  },
});


class GuestSearch extends React.Component {
  componentDidMount() {
    document.title = "Guest Search - HotelX";
  }

  state = {input: ""};
  
  onChange = (e) => {
    e.preventDefault();
    this.setState({input: e.target.value});
  };

  

  render() {
    const { classes } = this.props;
    //Add your code here
    const guest = [
      {firstName: "Aiden", lastName: "Hadisi", roomNumber: 100, checkIn: "12/04/20", checkOut: "12/07/20"}, {firstName: "Jose", lastName: "Abundez", roomNumber: 101, checkIn: "12/03/20", checkOut: "12/05/20"},
      {firstName: "Kirti", lastName: "Chaudhari", roomNumber: 100, checkIn: "12/07/20", checkOut: "12/12/20"}
    ];

    const renderGuest = (guest, index) => {
      return(
        
        <tr key={index}>
          <td>{guest.firstName}</td>
          <td>{guest.lastName}</td>
          <td>{guest.roomNumber}</td>
          <td>{guest.checkIn}</td>
          <td>{guest.checkOut}</td>
        </tr>
        
      )
    }

    return (
      <div>
        <Form className={classes.form}>
          <Form.Label>Search for User</Form.Label>
          <Form.Control type="text" placeholder="Enter first and last name"/>
          <Form.Text className="text-muted">
            Search for user profile by entering guest's name.
          </Form.Text>
        </Form>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Room Number</th>
              <th>Check In Date</th>
              <th>Check Out Date</th>
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

export default withStyles(styles)(GuestSearch);
