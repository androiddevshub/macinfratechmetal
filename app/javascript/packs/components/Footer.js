import * as React from "react";
import "./footer.css";
import MacLogo from "./../assets/images/mac_logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer-main">
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="contact-content text-center">
            <a href="#">
              <img width="100" src={MacLogo} alt="logo" />
            </a>
            <p>
              We are leading suppliers for Glass Industry of Batching systems,
              Chimney Fabrication, Reversal damper, furnace binding and
              refractory lining, Batch Charger, Cullet Washing System etc.
            </p>
            <div className="hr"></div>
            <h6>---</h6>
            <h6>296B GURUNANAK FARM (BARI), P.O. BARA,</h6>
            <h6>SITARGANJ, DISTT - U.S. NAGAR, UTTARAKHAND (263148)</h6>
            <h6>---</h6>
            <h6>GF-10 ORCHID BLUE, NEAR BODH ASHRAM,</h6>
            <h6>FIROZABAD, UTTAR PRADESH (283203)</h6>
            <h6>---</h6>
            <span>
              <img
                src="https://img.icons8.com/ios/50/000000/outgoing-call.png"
                width={20}
              />
              <h6>
                <a href="tel:[phone number]"> +91-98977-20113 </a>
              </h6>
            </span>

            <div className="contact-social">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/macinfratechmetal/"
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/facebook.png" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/mac_infratechmetal/"
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCl9NFGXFE2lLDst0TBLR_YA"
                  >
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/mac-infratech-metal-private-limited"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  </a>
                </li>
              </ul>
            </div>
            <h6>
              MAC Infratech Metal is a registered trade mark of MAC Infratech
              Metal Pvt Ltd. All Rights Reserved
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}
