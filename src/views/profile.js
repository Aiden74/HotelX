import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
const styles = (theme) => ({
  //Add your styles here
  form: {
    maxWidth: "500px",
    marginBottom: "3rem",
  },
  picture: {
    maxWidth: "300px",
  },
});
class Profile extends React.Component {
  componentDidMount() {
    document.title = "Profile - HotelX";
  }

  render() {
    const { classes } = this.props;
    //Add your code here
    return (
      <div>
        <Form className={classes.form}>
          <Form.Label>Search for User</Form.Label>
          <Form.Control type="text" placeholder="Enter first and last name" />
          <Form.Text className="text-muted">
            Search for user profile by entering guest's name.
          </Form.Text>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Form>

        <div className={classes.profile}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <img
                src="./images/profile.png"
                alt="profile"
                className={classes.picture}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <p>
                <b>First Name: </b> John
              </p>
              <p>
                <b>Last Name: </b> Doe
              </p>
              <p>
                <b>Phone Number: </b> 888-555-4141
              </p>
              <p>
                <b>Address: </b>
              </p>
              <p>
                <b>ID: CA 33322211</b>
              </p>
              <p>
                <b>License Plate: 212C223</b>
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
