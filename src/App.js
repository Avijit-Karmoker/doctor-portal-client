import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";
import AppointmentDataTable from "./components/Dashboard/AppointmentDataTable/AppointmentDataTable";
import Prescriptions from "./components/Dashboard/Prescriptions/Prescriptions";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <MainDashboard></MainDashboard>
          </PrivateRoute>
          <Route path="/doctor/patients">
            <AppointmentDataTable></AppointmentDataTable>
          </Route>
          <Route path="/doctor/prescriptions">
            <Prescriptions></Prescriptions>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
