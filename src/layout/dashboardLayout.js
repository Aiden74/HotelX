import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const styles = (theme) => ({
  content: {
    minHeight: "calc(100vh - 56px)",
    backgroundColor: "#1d2025",
    padding: "3rem",
    color: "white",
  },
});

class DashboardLayout extends React.Component {
  componentDidMount() {
    document.title = "Dashboard - HotelX";
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">HotelX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/current">Current</Nav.Link>
              <Nav.Link href="/all">All</Nav.Link>
              <Nav.Link href="/reservation">Reservation</Nav.Link>
              <Nav.Link href="/housekeeping">Housekeeping</Nav.Link>
              <Nav.Link href="/profile">Guest Profile</Nav.Link>
              <Nav.Link href="/stay">Stay</Nav.Link>
              <Nav.Link href="/report">Report</Nav.Link>
              <Nav.Link href="/ReservationHome">Reservation Home</Nav.Link>
              <Nav.Link href="/guestSearch">Guest Search</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#none">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={classes.content}> {this.props.children}</div>
      </>
    );
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default withStyles(styles)(DashboardLayout);
