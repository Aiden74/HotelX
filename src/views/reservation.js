import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class Reservation extends React.Component {
  componentDidMount() {
    document.title = "Reservation  - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return <div></div>;
  }
}

export default withStyles(styles)(Reservation);
