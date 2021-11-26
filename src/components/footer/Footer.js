import React from "react";
import logo from "../../image/logo3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="container-fluid border border-top mt-5  bg-light">
        <div className="container-sm">
          <div className="row">
            <div className="col-md-4  mx-auto py-4">
              <img
                style={{ width: "100px", height: "100px" }}
                src={logo}
                alt=""
              />
              <p>
                Our ProActive health care is a one of the best medical,here we
                are promised to give best medical treatment,our all member are
                good in his/her field
              </p>
            </div>
            <div className="col-md-4  mx-auto text-center py-4">
              <h4>Contact</h4>
              <h6>
                <FontAwesomeIcon icon={faPhone} /> Our Phone Number :
                +8801516065154
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faPhone} /> Our Whatsapp Number :
                +8801516065154
              </h6>
            </div>
            <div className="col-md-4  mx-auto text-center py-4">
              <h4> Social contact</h4>
              <div className="d-flex justify-content-center gap-3">
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />
                </h2>
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />
                </h2>
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
