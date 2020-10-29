import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class AllRooms extends React.Component {
  componentDidMount() {
    document.title = "All Rooms - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return <div></div>;
  }
}

export default withStyles(styles)(AllRooms);
