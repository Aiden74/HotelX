import React, { Component } from "react";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: " ",
      lastName: " ",
      roomType: " ",
      gender: " ",
      budget: " ",
      noofGuests: " ",
      checkin_date: " ",
      checkout_date: " ",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  roomhandler = (event) => {
    this.setState({
      roomType: event.target.value,
    });
  };
  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  budgethandler = (event) => {
    this.setState({
      budget: event.target.value,
    });
  };
  noofguesthandler = (event) => {
    this.setState({
      noofGuests: event.target.value,
    });
  };
  checkindatehandler = (event) => {
    this.setState({
      checkin_date: event.target.value,
    });
  };
  checkouthandler = (event) => {
    this.setState({
      checkout_date: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName} Room Booked Succesfully..!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: " ",
      roomType: " ",
      gender: " ",
      budget: " ",
      noofGuests: " ",
      checkin_date: " ",
      checkout_date: " ",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Room Registration</h1>
          <lable>FirstName: </lable>
          <td>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.firsthandler}
              placeholder="FirstName.."
            />
            <br />
            <br />
          </td>

          <lable>LastName: </lable>
          <td>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.lasthandler}
              placeholder="LastName.."
            />
            <br />
            <br />
          </td>

          <lable>Room Type: </lable>
          <td>
            <input
              type="text"
              value={this.state.roomType}
              onChange={this.roomhandler}
              placeholder="Room Type.."
            />
            <br />
            <br />
          </td>

          <lable>Budget:</lable>
          <td>
            <input
              type="text"
              value={this.state.budget}
              onChange={this.budgethandler}
              placeholder="Budget.."
            />
            <br />
            <br />
          </td>

          <lable>No of Guests:</lable>
          <td>
            <input
              type="text"
              value={this.state.noofGuests}
              onChange={this.noofguesthandler}
              placeholder="No Of Guests.."
            />
            <br />
            <br />
          </td>

          <lable>Gender: </lable>
          <td>
            <select onChange={this.genderhandler} defaultValue="Select Gender">
              <br />

              <option defaultValue>Select Gender</option>
              <br />
              <option value="male">Male</option>
              <br />
              <option value="Female">Female</option>
              <br />
            </select>
          </td>
          <br />
          <lable>Check-in-Date:</lable>
          <td>
            <input
              type="text"
              value={this.state.checkin_date}
              onChange={this.checkindatehandler}
              placeholder="Check-in-Date"
            />
            <br />
            <br />
          </td>
          <lable>Check-out-Date:</lable>
          <td>
            <input
              type="text"
              value={this.state.checkout_date}
              onChange={this.checkouthandler}
              placeholder="Check-out-Date"
            />
          </td>
          <br />
          <br />
          <td>
            <input type="submit" value="Submit" />
          </td>
        </form>
      </div>
    );
  }
}
export default Reservation;
