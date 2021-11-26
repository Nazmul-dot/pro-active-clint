import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./service.css";
const Service = ({ service }) => {
  const { id, title, img, details } = service;
  const history = useHistory();
  const redirect_single = () => {
    // alert(id);
    history.push(`singleservice/${id}`);
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 col-10">
        <Card
          style={{ width: "16rem", height: "25rem" }}
          className="border pb-3 mx-auto"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details.slice(0, 100)}</Card.Text>
          </Card.Body>
          <Card.Link
            onClick={redirect_single}
            className="mb-auto text-decoration-none text-uppercase mx-3"
            style={{ marginBottom: "10px" }}
          >
            <span className="view-text"> view more</span>
          </Card.Link>
        </Card>
      </div>
    </>
  );
};

export default Service;
