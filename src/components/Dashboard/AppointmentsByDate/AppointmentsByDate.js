import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      <div className="d-flex align-items-center fs-5 mb-5 mt-3">
        <h1 className="col-md-8 text-brand">Appointments</h1>
        <p className="text-secondary col-md-4 pt-2">{appointments[0]?.date}</p>
      </div>
      <AppointmentShortList appointments={appointments}></AppointmentShortList>
    </div>
  );
};

export default AppointmentsByDate;
