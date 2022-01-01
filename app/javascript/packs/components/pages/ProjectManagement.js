import * as React from "react";
import "./project_management.css";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, ListGroup } from "react-bootstrap";
import ShowImage from "./../../assets/images/slider.png";
import PM_Engineering from "./../../assets/images/engineering_team.png";
import PM_Site_mobilization from "./../../assets/images/gallery/IMG_20171224_144836.jpg";
import PM_Procurement from "./../../assets/images/gallery/IMG_20171212_125545.jpg";
import PM_Commisioning from "./../../assets/images/gallery/IMG_20171221_153846.png";

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
        We have a strong manpower base to execute all types of Glass Furnaces &
        batch house construction and is able to take up multiple projects
        simultaneously in different locations. We have competent supervisory
        staff, skilled workmen who have 15 – 20 years of experience in the field
        of Glass Furnace & batch house construction. We have complete set of
        tools to boost up the fabrication and erection work.
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
            <Card.Img
              className="pm-card-image"
              variant="top"
              src={PM_Engineering}
            />
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
            <Card.Img
              className="pm-card-image"
              variant="top"
              src={PM_Site_mobilization}
            />
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
            <Card.Img
              className="pm-card-image"
              variant="top"
              src={PM_Procurement}
            />
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
            <Card.Img
              className="pm-card-image"
              variant="top"
              src={PM_Commisioning}
            />
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
