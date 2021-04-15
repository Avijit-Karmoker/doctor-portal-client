import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const AppointmentDataTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <SideBar></SideBar>
      <div className="col-md-10 float-end">
        <h2 className="p-3">Patients</h2>
        <div className="m-5 shadow p-5">
          <h3 className="text-brand">All Patients</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Weight</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{appointment.name}</td>
                    <td>{appointment.gender}</td>
                    <td className="ps-4">{appointment.weight}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDataTable;
