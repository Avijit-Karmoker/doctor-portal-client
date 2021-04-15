import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((response) => response.json())
      .then((data) => setPrescriptions(data));
  }, []);
  return (
    <div>
      <SideBar></SideBar>
      <div className="col-md-10 float-end">
        <h2 className="p-3">Prescription</h2>
        <div className="m-5 shadow p-5">
          <h3 className="text-brand">All Prescriptions</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Prescriptions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions?.map((appointment, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{appointment.date}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.phone}</td>
                    <td><button className=" btn btn-brand text-white">View</button></td>
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

export default Prescriptions;
