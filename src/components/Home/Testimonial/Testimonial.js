import React from "react";

const Testimonial = ({ testimonial }) => {
  const { quote, name, from, img } = testimonial;
  return (
    <div className=" col-md-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text fs-5 pe-3 ps-3 mb-5 text-center">{quote}</p>
        </div>
        <div className="d-flex pb-4 align-items-center">
          <img className="me-4 ms-5" src={img} alt="" />
          <div>
            <h6 className="text-primary fs-3">{name}</h6>
            <p className="m-0 fs-4">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
