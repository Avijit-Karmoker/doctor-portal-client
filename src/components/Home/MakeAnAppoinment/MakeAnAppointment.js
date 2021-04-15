import React from "react";
import doctor from "./../../../images/doctor.png";
import './MakeAnAppointment.css';

const MakeAnAppointment = () => {
  return (
    <section className="make-appointment">
      <div>
        <div className="row">
          <div className="col-md-5 d-none d-md-block appointment-img">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5 appointment-text">
            <h5 className="text-success fs-2 text-uppercase">Appointment</h5>
            <h1 className="my-4">Make an appointment <br/> Today </h1>
            <p style={{paddingRight: '40%'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, culpa? Quaerat molestias officia suscipit nobis quibusdam aliquam a dolorum aperiam!</p>
            <button className="btn btn-brand">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAnAppointment;
