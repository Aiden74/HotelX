import React, {Component} from 'react';
function updateMe(){
    alert('Updated Information Successfully')
  }

class EditInfo extends Component{ 
  constructor(props)
  {
    super(props)

    this.state = {
      firstName: " ",
      lastName: " ",
      phonenumber: " ",
      address: " ",
      id: " ",
      licensePlate: " ",
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
    phonenumberhandler = (event) =>{
      this.setState({
        phonenumber:event.target.value
      })
  }
    addresshandler =(event) => {
        this.setState({
          address:event.target.value
        })
      }
    idhandler =(event) =>{
          this.setState({
            id:event.target.value
          })
        }
      licensePlatehandler = (event) => {
        this.setState({
            licensePlate:event.target.value
        })
      }
      
      handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} Information Updated Succesfully..!!!`)
        console.log(this.state);
        this.setState({
          firstName:"",
          lastName: " ",
          phonenumber: " ",
          address: " ",
          id: " ",
          licensePlate: " ",
        })
        event.preventDefault()
      }
      render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>Edit Information </h1>
              <lable>FirstName: </lable><td><input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName.."/><br /><br /></td>
              
              <lable>LastName: </lable><td><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName.."/><br /><br /></td>
              
              <lable>Phone Number: </lable><td><input type="text" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="phonehandler"/><br /><br /></td> 
              
              <lable>Address:</lable><td><input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="address"/><br /><br /></td>
              
              <lable>ID:</lable><td><input type="text" value={this.state.id} onChange={this.idhandler} placeholder="No Of Guests.."/><br /><br /></td> 
              
              <lable>License Plate </lable><td><input type="text" value={this.state.licensePlate} onChange={this.licensePlatehandler} placeholder="License" /><br /><br /><br />
               <a href = "/ReservationHome.js">
               <td><input type="submit" value="Submit" onClick={updateMe}/></td>
                </a>
                </td>
              </form>
          </div>
        )
      }
    }
    export default EditInfo;
