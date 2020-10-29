import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  //Add your styles here
});
class Stay extends React.Component {
  componentDidMount() {
    document.title = "Stay  - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return <div></div>;
  }
}

export default withStyles(styles)(Stay);
