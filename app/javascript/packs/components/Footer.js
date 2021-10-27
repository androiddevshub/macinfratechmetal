import * as React from "react";
import "./footer.css";
import MacLogo from "./../assets/images/mac_logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Footer() {
  return (
    <div className="footer-main">
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img width="100" src={MacLogo} alt="logo" />
                </a>
                <p>
                  We are leading suppliers of Glass Industry Batching systems,
                  Chimney Fabrication, Reversal damper, furnace binding and
                  refractory lining etc.
                </p>
                <div className="hr"></div>
                <h6>296B GURUNANAK FARM (BARI), P.O. BARA,</h6>
                <h6>SITARGANJ, DISTT - U.S. NAGAR, UTTARAKHAND (263148)</h6>
                <h6>
                  +91-70179-30116<span>|</span>+91-98371-03646
                </h6>
                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
