import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faGripHorizontal,
  faCalendarWeek,
  faUserFriends,
  faFileAlt,
  faCog,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import { UserContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isDoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => setIsDoctor(data));
  }, []);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 me-5"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard
          </Link>
        </li>
        {isDoctor && (
          <div>
            <li>
              <Link
                to="/doctor/appointment"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faCalendarWeek} /> Appointment
              </Link>
            </li>
            <li>
              <Link
                to="/doctor/patients"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserFriends} /> Patients
              </Link>
            </li>
            <li>
              <Link
                to="/doctor/prescriptions"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faFileAlt} /> Prescriptions
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faUserMd} /> Add Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/doctor/settings"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faCog} /> Settings
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
