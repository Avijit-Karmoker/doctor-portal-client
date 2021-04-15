import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section>
            <div className="">
                <h5 className="text-center mb-5" >
                    Our Doctors
                </h5>
                <div className="row container m-auto">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} ></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;