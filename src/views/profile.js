import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class Profile extends React.Component {
  componentDidMount() {
    document.title = "Profile - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return <div></div>;
  }
}

export default withStyles(styles)(Profile);
