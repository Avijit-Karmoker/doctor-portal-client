import React from 'react';
import wilson from '../../../images/Watson Harry.png';
import ema from '../../../images/Ema Gomez.png';
import aliza from '../../../images/Aliza Farari.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const testimonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse tempora voluptates aliquam delectus explicabo?ovijit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, suscipit.',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse tempora voluptates aliquam delectus explicabo?ovijit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, suscipit.',
            name: 'Ema Gomez',
            from: 'California',
            img: ema
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse tempora voluptates aliquam delectus explicabo?ovijit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, suscipit.',
            name: 'Aliza Farari',
            from: 'California',
            img: aliza
        }
    ]
    return (
        <section className="testimonials py-5">
            <div className="containers">
                <div className="section-header">
                    <h5 className="text-success text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br/> Says </h1>
                </div>
                <div className="card-check mt-5 row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;