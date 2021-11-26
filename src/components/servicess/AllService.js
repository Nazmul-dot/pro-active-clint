import React from "react";
import Service from "./Service";

const AllService = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-10 col-10  mx-auto">
            <h1 className="text-center my-3">
              <span className="text-danger">Our</span> <span>Services</span>
              <hr />
            </h1>
          </div>
          <div className="col-md-5 col-10  mx-auto mb-3">
            <p className>
              To get our best medical services early visit and watch our each
              medical service and pick one what is your need,we ensure that our
              doctors are the best in this his/her feild
            </p>
          </div>
          <div className="col-md-10 col-10 mx-auto">
            <div className="row g-3 ">
              {data.map((service) => (
                <Service key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
