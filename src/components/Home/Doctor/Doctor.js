import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 col-sm-6 text-center">
      {doctor.image ? (
        <img style={{ height: "400px", width: "300px" }} src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" />
      ) : (
        <img
          style={{ height: "400px", width: "300px" }}
          className="img-fluid mb-3"
          src={`http://localhost:5000/${doctor.file.name}`}
          alt=""
        />
      )}
      <h4>{doctor.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
        +880-188-9182872
      </p>
    </div>
  );
};

export default Doctor;
