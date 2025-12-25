import BackButton from "../../backButton.";

import "./index.css";

const MobileSpecificationsPage = () => (
  <div class="Mobile-specifications-page-main-bg-container">
    <img
      src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/iphoneX-bg.png"
      class="mobile-page-image"
    />
    <div class="specifications-container">
      <h1>specifications</h1>
      <ul>
        <li>3 GB RAM</li>
        <li>5.80 Super Retina HD OLED Display</li>
        <li>Front Camera 7MP</li>
        <li>Rear Camera 12MP+12MP</li>
        <li>Apple A11 Bionic Processor</li>
        <li>Battery Capacity 2716mAH</li>
      </ul>
      <div class="div-01">
        <button class="btn btn-primary button">Buy Now</button>
      </div>
    </div>
  </div>
);

export default MobileSpecificationsPage;
