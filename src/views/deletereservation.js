import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Col, Button } from "react-bootstrap";

function deleteMe(){
    alert('Deleted Reservation Successfully')
  }
const styles = (theme) => ({
  //Add your styles here 
});
class DeleteReservation extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      firstName: " ",
      lastName: " ",
      roomType: " ",
      noofGuests: " ",
      checkin_date: " ",
      checkout_date:" ",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  firsthandler =(event) => {
    this.setState({
      firstName:event.target.value
    })
  }
  lasthandler = (event) => {
    this.setState({
      lastName:event.target.value
    })
  }
  roomhandler = (event) =>{
    this.setState({
      roomType:event.target.value
    })
  }
  noofguesthandler = (event) => {
    this.setState({
      noofGuests:event.target.value
    })
  }
  checkindatehandler = (event) => {
    this.setState({
      checkin_date:event.target.value
    })
  }
  checkouthandler = (event) => {
    this.setState({
      checkout_date:event.target.value
    })
  }
  handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName} Deleted Information Succesfully..!!!`)
    console.log(this.state);
    this.setState({
      firstName:" ",
      lastName: " ",
      roomType: " ",
      noofGuests: " ",
      checkin_date: " ",
      checkout_date:" ",
    })
    event.preventDefault()
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Room Registration</h1>
          <lable>FirstName: </lable><td><input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName.."/><br /><br /></td>
          
          <lable>LastName: </lable><td><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName.."/><br /><br /></td>
          
          <lable>Room Type: </lable><td><input type="text" value={this.state.roomType} onChange={this.roomhandler} placeholder="Room Type.."/><br /><br /></td> 
          <lable>No of Guests: </lable><td><input type="text" value={this.state.noofGuests} onChange={this.noofguesthandler} placeholder="No of guests"/><br /><br /></td>
          
          <lable>Checkin_date:</lable><td><input type="text" value={this.state.checkin_date} onChange={this.checkin_date} placeholder="Check in Date"/><br /><br /></td> 
          <lable>Checkout_date:</lable><td><input type="text" value={this.state.checkout_date} onChange={this.checkout_date} placeholder="Check out Date"/><br /><br /></td> 
          
            <a href = "/main">
            <td><input type="submit" value="Delete Reservation" /></td>
            </a>
        </form>
      </div>
    )
  }
}
export default DeleteReservation ; 


  
