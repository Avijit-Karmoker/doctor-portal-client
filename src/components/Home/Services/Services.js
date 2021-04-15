import React from "react";
import "./Services.css";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teethWhitening from "../../../images/teeth whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Felling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: teethWhitening,
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#203047" }}>Services We Provide</h2>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
