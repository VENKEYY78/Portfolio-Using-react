import BackButton from "../../backButton";

import "./index.css";

const MobileSpecificationsPage = () => (
  <div className="Mobile-specific-page-main-bg-container">
    <img
      src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/iphoneX-bg.png"
      className="mobile-specific-page-image"
      alt="mobile-img"
    />
    <div className="mobile-specific-page-container">
      <h1 className="mobile-specific-page-heading">specifications</h1>
      <ul className="mobile-specific-unodered-list-container">
        <li className="mobile-specific-page-list-item">3 GB RAM</li>
        <li className="mobile-specific-page-list-item">
          5.80 Super Retina HD OLED Display
        </li>
        <li className="mobile-specific-page-list-item">Front Camera 7MP</li>
        <li className="mobile-specific-page-list-item">
          Rear Camera 12MP+12MP
        </li>
        <li className="mobile-specific-page-list-item">
          Apple A11 Bionic Processor
        </li>
        <li className="mobile-specific-page-list-item">
          Battery Capacity 2716mAH
        </li>
      </ul>
      <div className="mobile-specific-page-button-container">
        <button className="btn btn-primary mobile-specific-page-button">
          Buy Now
        </button>
      </div>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default MobileSpecificationsPage;
