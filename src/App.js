import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./views/main";
import CurrentStatus from "./views/current";
import DashboardLayout from "./layout/dashboardLayout";
import All from "./views/all";
import Housekeeping from "./views/housekeeping";
import Profile from "./views/profile";
import Reservation from "./views/reservation";
import Stay from "./views/stay";
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
          <Route path="/stay" component={Stay} />
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
