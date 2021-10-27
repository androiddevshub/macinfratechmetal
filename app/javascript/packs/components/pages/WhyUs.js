import * as React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import "./why_us.css";
export default function WhyUs() {
  return (
    <div className="whyus-main">
      <div className="whyus-title">Why work with us?</div>
      <div className="whyus-content">
        Mr. Charanjit Singh is associated with the different verticals of
        industries since last two decades. He and his team is well known for
        completing projects under record time with full customer satisfaction.
        He is notable for greetings pre- arranging and executing ventures under
        record time.
      </div>
      <div className="whyus-content">
        Before this endeavor Mr. Charanjit Singh has executed many prestigious
        projects in organization INFRATECH METAL SOLUTIONS in his capacity as a
        director from 2001.
      </div>
      <div className="whyus-content">
        We are renowned as one of the leading suppliers of Glass Industry
        Batching systems, Chimney Fabrication, Reversal damper, furnace binding
        & refractory lining etc. We are widely appreciated all over and have
        been successful in earning the appreciation of our esteemed clients.
      </div>
      <div className="wework-title">How do we work?</div>
      <div className="accordian-main">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="accordian-header">Spares & Components</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                MAC Infratech Metal Private Limited holds critical spare parts
                in stock for all manufactured components, and other items are
                available with short lead times. Detailed spare parts lists are
                provided for all components and systems, and we assist customers
                in determining their requirements.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="accordian-header">After Sales Services</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                MAC Infratech Metal Private Limited Provides best after sales
                services on Periodic or as-required maintenance or repair of
                equipment during and after a warranty period.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="accordian-header">
                Product Training to Customers
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                We impart the training to our customer about our product/systems
                on minimal charges. Our mission is to improve the knowledge of
                user about our product/systems. This training will help to user
                to maintain the product/system properly & plant will run
                smoothly with fewer breakdowns.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="accordian-header">Online Technical Support</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                We provide online technical support to our valuable customer /
                user Via Telephone & Email. Please contact for support:
                +91-9897720113 Email Us: enquiry@macinfratechmetal.com
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <div className="accordian-header">Design on which we worked</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                <p>➢ Glacera engineers (Mr. Prem P Malhotra)</p>
                <p>➢ A.K. glass consultant (Mr. A.K. Sinha)</p>
                <p>➢ C.V. Chalam consultants’ Pvt Ltd. (Mr. C.V. Chalam)</p>
                <p>➢ Thermproject glass service. (Mr. Bhupen Parmar)</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <div className="accordian-header">
                Batch house instrument suppliers for IMS
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordian-content">
                <p>➢ Pro-Quipp Solutions Pvt. Ltd.</p>
                <p>
                  ➢ FLSmitdth pfister India ltd. (Formely known as Trans weigh
                  India Ltd.)
                </p>
                <p>➢ Weightronix controls</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="wework-title">IMS Facilities</div>
      <div className="facilities-main">
        <Card>
          <div className="facilities-list">
            <ListGroup variant="flush">
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ In house designing facility (Auto Cadd).
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ Over 55 well trained employees.
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ 1 mobile crane with lifting capacity of 14 tonnes.
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ 12 arc welding sets.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ 08 gas cutting sets.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ 01 plasma cutting set.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ 05 no's of safety belts.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ 15 no's of welding helmets/screens.
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ 03 no's of angle grinders (7’’).
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>
                  ➢ 02 no's of angle grinders (4’’).
                </ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ 06 no's. of right angles.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ Several sets of spanners.</ListGroup.Item>
              </div>
              <div className="facilities-item">
                <ListGroup.Item>➢ Spray paint machine.</ListGroup.Item>
              </div>
            </ListGroup>
          </div>
        </Card>
      </div>
    </div>
  );
}
