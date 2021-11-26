import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className="bg">
        <p style={{ height: "70vh" }}></p>
      </div>
      <Container>
        <h1>About Pro-Active</h1>
        <hr className="w-25" />
        <p>
         The <span style={{fontWeight:'bold'}}>Pro-Active </span>Institute is a leading independent global medical research institute established and headquartered in Sydney, with additional major centres in China, India and the UK and an international network of experts and collaborators.

Our mission is to improve the health of millions of people worldwide, particularly those living in disadvantaged circumstances, by challenging the status quo and using innovative approaches to prevent and treat non-communicable diseases and injury. 
        </p>
      </Container>
    </>
  );
};

export default About;
