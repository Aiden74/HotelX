import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
//Instead of CSS, we use material UI's JSS styling. This is just like CSS but without dashes (background-color becomes backgroundColor)
//Styles can be applied and modified dynamically.
const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      minHeight: "100vh",
      backgroundImage: "url('./images/main.jpg')",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      padding: "20vh 0",
      boxSizing: "border-box",
    },
    title: {
      fontFamily: "'Staatliches', cursive",
      fontSize: "5rem",
      backgroundColor: "#00000087",
      padding: "2rem",
      textAlign: "center",
      color: "white",
    },

    button: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "#2196F3",
      color: "white",
      minHeight: "6vh",
      fontSize: "1.1rem",
      "&:hover": {
        backgroundColor: "#d0a256",
      },
    },
    buttonContainer: {
      marginTop: "10vh",
      textAlign: "center",
    },
  };
});

// React components can be written in either functional style or in class.
// Here we are using a function.
function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>HotelX</div>
      <div className={classes.buttonContainer}>
        <Link to="/current">
          <Button className={classes.button}>Open Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
export default Main;
