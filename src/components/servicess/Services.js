import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [data, setdata] = useState([]);
  //   const { data } = useAuth();
  useEffect(() => {
    fetch("fakebd.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  // console.log(data);
  return (
    <>
      <div className="container-fluid " style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-8 col-10  mx-auto">
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
          <div className="col-md-10 col-10  mx-auto">
            <div className="row g-3">
              {data.map((service) => (
                <Service key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
