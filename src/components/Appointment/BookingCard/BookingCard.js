import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 ps-4 pe-4 text-center">
            <div className="card p-5">
                <h1 className="card-title text-brand">{booking.subject}</h1>
                <h4>{booking.visitingHours}</h4>
                <p>{booking.totalSpace} SPACE AVAILABLE</p>
                <button onBlur={openModal} className="btn btn-brand me-5 ms-5 text-uppercase">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;