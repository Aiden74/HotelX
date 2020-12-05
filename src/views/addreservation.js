import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Col, Button } from "react-bootstrap";

function AddMe(){
    alert('Added Reservation Successfully')
  }
const styles = (theme) => ({
  //Add your styles here 
});
class AddReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null,
    };
  }
  
  componentDidMount() {
    document.title = "Delete Reservation  - HotelX";
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    this.setState({ room: rooms && rooms[this.props.match.params.room] });
  }

  handleSubmit = (event) => {
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    rooms[this.props.match.params.room].guest = {
      first: event.target.first.value,
      last: event.target.last.value,
      checkIn: event.target.checkIn.value,
      checkOut: event.target.checkOut.value,
      rate: event.target.rate.value,
      total: event.target.total.value,
      payment: event.target.payment.value,
      balance: event.target.balance.value,
    };

    rooms[this.props.match.params.room].status = "Unavailable/Occupied";

    localStorage.setItem("rooms", JSON.stringify(rooms));
  };

  handleCheckOut = () => {
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    rooms[this.props.match.params.room].guest = null;
    rooms[this.props.match.params.room].status = "Unavailable/Dirty";
    this.setState({ room: rooms && rooms[this.props.match.params.room] });

    localStorage.setItem("rooms", JSON.stringify(rooms));
    window.location.reload(false);
  };
  
  render() {
    const { classes } = this.props;
    //Add your code here
    return (
      <div>
        {this.state.room ? (
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first"
                  defaultValue={
                    this.state.room.guest && this.state.room.guest.first
                  }
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="last"
                  defaultValue={
                    this.state.room.guest && this.state.room.guest.last
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Check In Date and Time</Form.Label>
                <Form.Control
                  type="text"
                  name="checkIn"
                  value={this.state.room.guest && this.state.room.guest.checkIn}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Expected Check Out Date and Time</Form.Label>
                <Form.Control
                  type="text"
                  name="checkOut"
                  value={
                    this.state.room.guest && this.state.room.guest.checkOut
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Room Type</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={this.state.room.type}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  type="number"
                  disabled
                  value={this.props.match.params.room}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Room Rate ($/Day)</Form.Label>
                <Form.Control
                  type="number"
                  name="rate"
                  value={this.state.room.guest && this.state.room.guest.rate}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Total Charge</Form.Label>
                <Form.Control
                  type="number"
                  name="total"
                  value={this.state.room.guest && this.state.room.guest.total}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Payment</Form.Label>
                <Form.Control
                  type="number"
                  name="payment"
                  value={this.state.room.guest && this.state.room.guest.payment}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Balance</Form.Label>
                <Form.Control
                  type="number"
                  name="balance"
                  value={this.state.room.guest && this.state.room.guest.balance}
                />
              </Form.Group>
            </Form.Row>
            
            <a href = "/main.js">
            <Button variant="primary" type="submit" onClick={AddMe}>
              Add Reservation
            </Button>
            </a>
            

            <Button
              variant="secondary"
              type="button"
              style={{ marginLeft: "2rem" }}
              onClick={this.handleCheckOut}
            >
              Check Out
            </Button>
          </Form>
        ) : (
          <div>That room does not exist.</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(AddReservation);
