import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df50be6e8231764dc23df',
        id: 1,
        subject: 'Cosmetic Dentistry',
        visitingHours: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df50be6e8231764dc23dg',
        id: 1,
        subject: 'Teeth Cleaning',
        visitingHours: '5:00 PM - 6:30 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df50be6e8231764dc23dh',
        id: 1,
        subject: 'Cavity Protection',
        visitingHours: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df50be6e8231764dc23di',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df50be6e8231764dc23dj',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mt-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row me-5 ms-5 mt-5">
                { 
                    bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;