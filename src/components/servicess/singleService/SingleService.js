import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Expert from "./Expert";
import SingleServicForm from "./SingleServicForm";

const SingleService = () => {
  let { id } = useParams();
  const [allservice, setallservice] = useState([]);
  const [service, setervice] = useState({});

  useEffect(() => {
    fetch("/fakebd.json")
      .then((res) => res.json())
      .then((data) => {
        const serviceData = data.find((item) => item.id === id);
        setervice(serviceData);
        const allservice = data.filter((item) => item.id !== id);
        setallservice(allservice);
        // console.log(allservice);
      });
  }, [id]);

  const history = useHistory();
  const singleSerevice = (id) => {
    // console.log(id);
    history.push(`/singleservice/${id}`);
  };
  return (
    <>
      <div className="container " style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-12 my-3 ms-3 ms-md-0 order-1">
            <h1>Service</h1>
            <hr className="w-25 " />
          </div>
          <div className="col-md-4  order-lg-2 order-3">
            <h5>our services</h5>
            <hr className="w-25" />
            {allservice.map((item) => (
              <p
              key={item.id}
                onClick={() => singleSerevice(item.id)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className="col-md-6 col-11 mx-auto  order-lg-3 order-2">
            <img className="w-100" src={service.img} alt="" />
            <h3 className="mt-4 mb-2">{service.title}</h3>
            <hr />
            <p className="w-75">{service.details}</p>
            <hr />
            <Expert />
            <SingleServicForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
