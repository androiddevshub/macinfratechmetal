import * as React from "react";
import "./project_management.css";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, ListGroup } from "react-bootstrap";
import ShowImage from "./../../assets/images/slider.png";
import CardImage from "./../../assets/images/gallery/IMG_20171212_122244.jpg";
export default function ProjectManagement() {
  return (
    <div className="pm-main">
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
            <Card.Img variant="top" src={CardImage} />
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
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
              <Card.Title className="pm-card-title">Procurement</Card.Title>
              <Card.Text>
                <div className="pm-card-content">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span>Purchasing</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Manufacturing</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Shipping / Delivery</span>
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
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
              <Card.Title className="pm-card-title">
                Site Mobilization
              </Card.Title>
              <Card.Text>
                <div className="pm-card-content">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span>Site Setup</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Preparation for receipt of all equipment</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>
                        Mechanical, Electrical & Control Panel Installation
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Dry Run & Material Testing</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Operator & Maintenance Training</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Installation & Operation Qualification</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="pm-list-card">
          <Card>
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
              <Card.Title className="pm-card-title">Commissioning</Card.Title>
              <Card.Text>
                <div className="pm-card-content">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span>Performance Qualification and Testing</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>
                        Provide as-built documentation, manuals and spares
                        lists.
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
