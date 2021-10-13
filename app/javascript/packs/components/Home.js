import * as React from "react";
import { Carousel, Card } from "react-bootstrap";
import SliderImage from "./../assets/images/slider.png";
import "./home.css";
export default function Home() {
  const productCards = () => {
    let products = [];

    const data = [
      {
        id: 1,
        title: "Steel fabrication, erection & casing work",
      },
      {
        id: 2,
        title: "Chimney fabrication & erection",
      },
      {
        id: 3,
        title: "Refiner, feeders",
      },
      {
        id: 4,
        title: "Furnace, Throat, Regenerator binding",
      },
      {
        id: 5,
        title: "Dismantling of furnace",
      },
      {
        id: 6,
        title: "Reversal damper fabrication & fitting",
      },
      {
        id: 7,
        title: "Duct and cooling of melter, throat, secondary & mould",
      },
      {
        id: 8,
        title: "Automatic batch house",
      },
      {
        id: 9,
        title: "Silos, Conveyor, Bucket elevator",
      },
      {
        id: 10,
        title: "Weighing hopper, Vibro feeder and Screw feeder",
      },
      {
        id: 11,
        title: "Instrumentation & Electrical equipments",
      },
      {
        id: 12,
        title: "Catwalk, Grating & Staircases",
      },
      {
        id: 13,
        title: "Material handling & weighing",
      },
      {
        id: 14,
        title: "Project layout & product design",
      },
    ];

    data.map((item, index) => {
      products.push(
        <div key={index}>
          <Card className="pts-card">
            <Card.Body>
              <Card.Title className="pts-card-title">{item.title}</Card.Title>

              <Card.Text className="pts-card-content">
                Enim incididunt voluptate enim tempor mollit. Enim magna
                adipisicing pariatur proident enim elit cillum id et. In velit
                pariatur nostrud fugiat deserunt laborum.
              </Card.Text>
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
            <div className="slider-text">First Slide</div>
            {/* <img src={SliderImage} alt="First slide" /> */}
          </Carousel.Item>
          <Carousel.Item className="slider">
            <div className="slider-text">Second Slide</div>
            {/* <img src={SliderImage} alt="Second slide" /> */}
          </Carousel.Item>
          <Carousel.Item className="slider">
            <div className="slider-text">Third Slide</div>
            {/* <img src={SliderImage} alt="Third slide" /> */}
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
