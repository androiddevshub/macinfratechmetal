import * as React from "react";
import "./project_management.css";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, ListGroup } from "react-bootstrap";
import ShowImage from "./../../assets/images/slider.png";
export default function ProjectManagement() {
  return (
    <div className="about-main">
      <div className="pm-title">How Our Project Management Works?</div>
      <div className="pm-content">
        MAC Infratech Metal Private Limited undertakes a wide variety of
        projects, big and small, and understands that each one is different, but
        all require the same attention to detail.
      </div>
      <div className="pm-content">
        Each project has a Project Engineer appointed to manage it and as the
        primary customer contact from commencement through to final completion.
        This requires the continual monitoring and reporting of progress
        relative to key dates and milestones, and might typically be divided
        into 4 phases:
      </div>

      <div className="pm-list-main">
        <div className="pm-list-card">
          <Card>
            <Card.Img variant="top" src={ShowImage} />
            <Card.Body>
              <Card.Title className="pm-card-title">Engineering</Card.Title>
              <Card.Text>
                <div className="pm-card-content">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span>
                        Project Commencement Meeting & Appoint Project Team
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>
                        Complete Pre-engineering / Project Schedule & Review
                        with Client
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Detailed Design & Drawings</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Design / Drawing Approval</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="pm-list-card">
          <Card>
            <Card.Img variant="top" src={ShowImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="pm-list-card">
          <Card>
            <Card.Img variant="top" src={ShowImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="pm-list-card">
          <Card>
            <Card.Img variant="top" src={ShowImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="pm-list-title">Engineering</div>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Procurement</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Accordion Item #4</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
 */}
    </div>
  );
}
