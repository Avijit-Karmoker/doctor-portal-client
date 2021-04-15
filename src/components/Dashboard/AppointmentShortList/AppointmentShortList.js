import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr className="text-secondary">
            <th scope="col">Name</th>
            <th scope="col">Schedule</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
              appointments.map(app => <tr>
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>{app.email}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentShortList;
