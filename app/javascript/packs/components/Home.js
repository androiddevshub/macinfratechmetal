import * as React from "react";
import { Carousel, Card } from "react-bootstrap";
import SliderImage1 from "./../assets/images/sliders/Slider_11.jpg";
import SliderImage2 from "./../assets/images/gallery/IMG_20171212_125545.jpg";
import SliderImage3 from "./../assets/images/gallery/IMG_20180209_113155.jpg";

import "./home.css";
export default function Home() {
  const productCards = () => {
    let products = [];

    const data = [
      {
        id: 1,
        title: "Steel fabrication, erection & casing work",
        description:
          "We fabricate and erect structures and install them at a variety of client sites across India. We have extensive experience in offering entirely tailored Fabrication & Erection Services to meet the needs of our clients.",
      },
      {
        id: 2,
        title: "Chimney fabrication & erection",
        description:
          "We can provide Chimney Fabrication and Erection services in accordance with quality requirements. These chimneys are used in the paper, pulp, ceramic, and construction sectors to release various hazardous chemicals, gases, and smokes.",
      },
      {
        id: 3,
        title: "Refiner, feeders",
        description: "",
      },
      {
        id: 4,
        title: "Furnace, Throat, Regenerator binding",
        description: "",
      },
      {
        id: 5,
        title: "Dismantling of furnace",
        description: "",
      },
      {
        id: 6,
        title: "Reversal damper fabrication & fitting",
        description: "",
      },
      {
        id: 7,
        title: "Duct and cooling of melter, throat, secondary & mould",
        description: "",
      },
      {
        id: 8,
        title: "Automatic batch house",
        description: "",
      },
      {
        id: 9,
        title: "Silos, Conveyor, Bucket elevator",
        description: "",
      },
      {
        id: 10,
        title: "Weighing hopper, Vibro feeder and Screw feeder",
        description: "",
      },
      {
        id: 11,
        title: "Instrumentation & Electrical equipments",
        description: "",
      },
      {
        id: 12,
        title: "Catwalk, Grating & Staircases",
        description: "",
      },
      {
        id: 13,
        title: "Material handling & weighing",
        description: "",
      },
      {
        id: 14,
        title: "Project layout & product design",
        description: "",
      },
    ];

    data.map((item, index) => {
      products.push(
        <div key={index}>
          <Card className="pts-card">
            <Card.Body>
              <Card.Title className="pts-card-title">{item.title}</Card.Title>

              {/* <Card.Text className="pts-card-content">
                {item.description}
              </Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      );
    });
    return products;
  };

  return (
    <div className="main">
      <div>
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item className="slider">
            <img src={SliderImage1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="slider">
            {/* <div className="slider-text">Second Slide</div> */}
            <img src={SliderImage2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="slider">
            {/* <div className="slider-text">Third Slide</div> */}
            <img src={SliderImage3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="au-main">
        <div className="au-title">About Us</div>
        <span className="au-content">
          We are renowned as one of the leading suppliers of Glass Industry
          Batching systems, Chimney Fabrication, Reversal damper, furnace
          binding and refractory lining etc. We are widely appreciated all over
          and have been successful in earning the appreciation of our esteemed
          clients.
        </span>
      </div>
      <div className="horz-line"></div>
      <div className="pts-main">
        <div className="pts-title">Products</div>
        <div className="pts-list-main">{productCards()}</div>
      </div>
    </div>
  );
}
