import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div>
        <div className="section-header text-center">
          <h5 className="text-primary fs-3"> Contact</h5>
          <h1 className="text-white fs-1 mb-5">Always contact with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-5 p-5"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-5 p-5"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                type="text"
                className="form-control mb-5 p-5"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
              />
            </div>
            <div className="form-group text-center">
                <button type="button" className="btn btn-brand pt-3 pb-3 pe-5 ps-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
