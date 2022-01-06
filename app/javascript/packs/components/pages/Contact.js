import React, { useState } from "react";
import "./contact.css";
import {
  Form,
  Button,
  InputGroup,
  Card,
  Container,
  Col,
  Row,
} from "react-bootstrap";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  function sendContactMail() {
    setSubmitting(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch(`${window.location.origin}/api/contacts/send_mail`, requestOptions)
      .then(async (response) => {
        console.log(response);
        if (response.ok) {
          setFormValues({ name: "", email: "", phone: "", message: "" });
          setSubmitting(false);
          alert(
            "Your query has been sent successfully. We will contact you soon"
          );
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  console.log("form data", formValues);

  return (
    <div className="contact-main">
      <div className="contact-title">Contact Us</div>

      <div className="contact-content">
        Have any questions? We'd love to hear from you
      </div>

      <div className="div-1">
        <div className="contact-form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                className="single-input-field"
                type="name"
                name="name"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="single-input-field"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="mb-2">
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control
                  className="single-input-field"
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                className="single-input-field"
                as="textarea"
                name="message"
                placeholder="Enter your message"
                rows={3}
                value={formValues.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              disabled={submitting}
              onClick={sendContactMail}
              variant="primary"
            >
              {submitting ? "Submitting" : "Submit"}
            </Button>
          </Form>
        </div>
        <div className="contact-details">
          <div className="address-info-div">
            <Card className="text-center">
              <div style={{ alignItems: "center" }}>
                <img
                  src="https://img.icons8.com/color/48/000000/link-company-parent.png"
                  style={{
                    width: "50px",
                    marginTop: "20px",
                    alignContent: "center",
                  }}
                ></img>

                <Card.Body>
                  <Card.Title
                    style={{
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    296B GURUNANAK FARM (BARI), P.O. BARA,
                    <br />
                    <br />
                    SITARGANJ, DISTT - U.S. NAGAR, UTTARAKHAND (263148)
                  </Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Title
                    style={{
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    GF-10 ORCHID BLUE, NEAR BODH ASHRAM,
                    <br />
                    <br />
                    FIROZABAD, UTTAR PRADESH (283203)
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
