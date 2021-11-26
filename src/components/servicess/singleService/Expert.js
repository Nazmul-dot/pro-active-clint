import React from "react";
import { Card } from "react-bootstrap";
import doctorr1 from "../../../image/doctor1.jpg";
import doctorr2 from "../../../image/doctor2.jpg";
import doctorr3 from "../../../image/doctor3.jpg";
import doctorr4 from "../../../image/doctor4.jpg";
const Expert = () => {
  return (
    <>
      <div className="row gy-3 gx-3 mt-2">
        <div>
          <h3 className='text-center'><span className='text-danger'>Our</span> Medical Experts</h3>
          <hr className='w-25 mx-auto'/>
        </div>
        <div className=" col-lg-6 col-12">
          <Card className="mx-auto" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={doctorr1} />
          </Card>
        </div>
        <div className=" col-lg-6 col-12">
          <Card className="mx-auto" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={doctorr2} />
          </Card>
        </div>
        <div className=" col-lg-6 col-12">
          <Card className="mx-auto" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={doctorr3} />
          </Card>
        </div>
        <div className=" col-lg-6 col-12">
          <Card className="mx-auto" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={doctorr4} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Expert;
