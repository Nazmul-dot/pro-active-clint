import React from "react";

const SingleServicForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h5 className="my-3">Make an Enquiry or Appointment</h5>
          <p>
            Fill up form below for appointment and our expert will contact you
            soon. All fields are required
          </p>
        </div>
        <div className="col-lg-6 col-10 my-2 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            aria-label="First name"
          />
        </div>
        <div className="col-lg-6 col-10 my-2 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Your mail"
            aria-label="First name"
          />
        </div>
        <div className="col-lg-6 col-10 my-2 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Your Phone"
            aria-label="First name"
          />
        </div>
        <div className="col-lg-6 col-10 my-2 mx-auto">
          <input type="datetime-local" className="form-control" />
        </div>
        <div className="col-lg-12 col-10 my-2 mx-auto">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write Your Comment here..."
          ></textarea>
        </div>
        <div className="col-lg-12 col-10 my-2 mx-auto">
          <button type="button" className="btn btn-danger w-100">
            Submit Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleServicForm;
