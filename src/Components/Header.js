import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CgMail } from 'react-icons/cg';
import { BiSolidPhoneCall  } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-sm-6 mt-5 ms-5" style={{ paddingTop: "4rem" }}>
            <h2>TRUSTED ACCOUNTED</h2>
            <h1>& BUSINESS ADVISOR</h1>
            <Button
              className="mt-3"
              style={{ width: "9rem" }}
              variant="primary"
            >
              CONSOULT NOW
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <h1>WHAT IS LOREM</h1>
            <p className="mt-3 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
              perspiciatis ipsa sit ipsum aliquam quis eius, eum omnis corrupti
              quos voluptates vero debitis dolorem minima asperiores autem.
              Doloribus aliquid amet iusto, voluptates consequuntur adipisci.
              Cumque dolorum illo ad nam adipisci? Architecto magni sint eum
              error ducimus, reiciendis voluptatum amet?
                      </p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem error enim amet culpa consequatur quaerat, earum accusamus, inventore unde quod nemo eaque veritatis in, magni aliquam quae quasi exercitationem repellat!</p>
          </div>
          <div className="col-sm-6 form">
            <h2>30%OFF</h2>
            <h4> ON ALL SERVICES</h4>
            <InputGroup className="mb-3" />
            <Form.Control placeholder="Full Name" aria-label="Username" />
            <InputGroup className="mb-3" />
            <Form.Control placeholder="Phone" aria-label="Username" />
            <InputGroup className="mb-3" />
            <Form.Control placeholder="Email" aria-label="Username" />
            <Button
              className="mt-3"
              style={{ width: "9rem" }}
              variant="primary"
            >
              Submit
            </Button>{" "}
          </div>
        </div>
          </div>
          <div className="container mt-5">
              <div className="row">
                  <div col-sm-4 style={{display:"flex",marginLeft:"8rem"}}>
                      <CgMail style={{ height: "5rem", width: "5rem", backgroundColor: "rgb(93, 94, 176)" }} />
                      <div style={{lineHeight:"0"}}>
                      <h5>Email.us</h5>
                      <p>ahmad@gmail.com</p>
                      <p>ali@gmail.com</p>
                      </div>
                  </div>
                  <div col-sm-4 style={{display:"flex",marginLeft:"8rem"}}>
                      <BiSolidPhoneCall style={{ height: "5rem", width: "5rem", backgroundColor: "rgb(93, 94, 176)" }} />
                      <div style={{lineHeight:"0"}}>
                      <h5>Call Us</h5>
                      <p>ahmad Khan</p>
                      <p>ali Khan</p>
                      </div>
                  </div>
                  <div col-sm-4 style={{display:"flex",marginLeft:"8rem"}}>
                      <TiLocation style={{ height: "5rem", width: "5rem", backgroundColor: "rgb(93, 94, 176)" }} />
                      <div style={{lineHeight:"0"}}>
                      <h5>Call Us</h5>
                      <p>ahmad Khan</p>
                      <p>ali Khan</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Header;
