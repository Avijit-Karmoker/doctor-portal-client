import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    date.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('Appointment created successfully');
      }
    })
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brandprogramming">
          {appointmentOn}
        </h2>
        <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
        <form className="form-group p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              {...register("name", { required: true })}
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              {...register("phone", { required: true })}
              placeholder="Phone no"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3 row">
            <div>
              <select className="form-control p-3" {...register("gender", { required: true })}>
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              {...register("age", { required: true })}
              placeholder="Your Age"
              type="number"
            />
            {errors.age && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              {...register("weight", { required: true })}
              placeholder="Weight"
              type="number"
            />
            {errors.weight && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input className="btn btn-brand float-end text-white ps-3 pe-3" type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
