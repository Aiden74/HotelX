import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./views/main";
import CurrentStatus from "./views/current";
import DashboardLayout from "./layout/dashboardLayout";
import All from "./views/all";
import Housekeeping from "./views/housekeeping";
import Profile from "./views/profile";
import Reservation from "./views/reservation";
import Stay from "./views/stay";
import Report from "./views/report";
import ReservationHome from "./views/ReservationHome";
import AddReservation from "./views/addreservation";
import GuestSearch from "./views/guestSearch";
import DeleteReservation from "./views/deletereservation";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <DashboardLayout>
          <Route path="/current" component={CurrentStatus} />
          <Route path="/all" component={All} />
          <Route path="/housekeeping" component={Housekeeping} />
          <Route path="/profile" component={Profile} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/stay/:room" component={Stay} />
          <Route path="/report" component={Report} />
          <Route path="/ReservationHome" component={ReservationHome} />
          <Route path="/addreservation" component={AddReservation} />
          <Route path="/deletereservation" component={DeleteReservation} />
          <Route path="/guestSearch" component={GuestSearch} />
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
