import * as React from "react";
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
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import addressIcon from "./../../assets/images/address-logo.png";

export class Contact extends React.Component {
  render() {
    const mapStyles = {
      width: "70%",
      height: "500px",
    };
    return (
      <div className="contact-main">
        <div className="contact-title">Contact Us</div>

        {/* <div>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 28.6433887, lng: 77.0789728 }}
          >
            <Marker position={{ lat: 28.6433887, lng: 77.0789728 }} />
          </Map>
        </div> */}

        <div className="contact-content">
          Have any questions? We'd love to hear from you
        </div>

        <div className="div-1">
          <div className="contact-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  className="single-input-field"
                  type="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="single-input-field"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <InputGroup className="mb-2">
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control
                    className="single-input-field"
                    type="number"
                    placeholder="Enter your phone number"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="single-input-field"
                  as="textarea"
                  placeholder="Enter your message"
                  rows={3}
                />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
          </div>
          <div className="contact-icons">
            <div className="address-info-div">
              <Card className="text-center">
                <div style={{ alignItems: "center" }}>
                  <img
                    src={addressIcon}
                    style={{
                      width: "80px",
                      marginTop: "20px",
                      alignContent: "center",
                    }}
                  ></img>

                  <Card.Body>
                    <Card.Title>Address</Card.Title>
                    <Card.Title
                      style={{
                        marginTop: "20px",
                        fontSize: "22px",
                      }}
                    >
                      296B GURUNANAK FARM (BARI), P.O. BARA,
                      <br />
                      <br />
                      SITARGANJ, DISTT - U.S. NAGAR
                      <br />
                      <br />
                      UTTARAKHAND (263148)
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
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDWTzhBdvVuAU-UuC6F2BwmMxv_Dr9pmwg",
})(Contact);
