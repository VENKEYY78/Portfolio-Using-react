// import BackButton from "../../backButton.";

import "./index.css";

const CricketerPage = () => (
  <div className="cricket-page-main-bg-container">
    <div className="cricket-page-top-container d-flex flex-row justify-content-center">
      <div className="KL-rahul-description d-flex flex-column justify-content-center">
        <h1>K.L. Rahul</h1>
        <p className="paragragh-01">
          Kannur Lokesh Rahul (born 18 April 1992), commonly known as KL Rahul,
          is an Indian international cricketer who plays....more
        </p>
      </div>
      <div>
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/klrahul-img1.png"
          className="kl-rahul-top-image"
          alt="alt0"
        />
      </div>
    </div>
    <div className="crickt-page-bottom-container">
      <h3 className="ipl-records-heading">IPL Records</h3>
      <div className="KXIP-vs-RCB-container d-flex flex-row justify-content-start">
        <div>
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/klrahul-img2.png"
            className="kl-rahul-middle-image"
            alt="alt1"
          />
        </div>
        <div className="KXIP-vs-RCB-description-container d-flex flex-column justify-content-start">
          <h3 className="kxip-vs-rcb-heading">KXIP vs RCB</h3>
          <p className="paragragh-02">
            He scored an unbeaten 132 off just 69 balls againt Royal Challengers
            Bangalore....more
          </p>
        </div>
      </div>
      <h3 className="videos-heading">Videos</h3>
      <div className="bottom-videos-container d-flex flex-row justify-content-start">
        <div className="each-video-container d-flex flex-column">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/klrahul-img3.png"
            className="kl-rahul-video-image"
            alt="alt2"
          />
          <p className="paragragh-03">KL Rahul hits 337 for karnataka</p>
        </div>
        <div className="each-video-container d-flex flex-column">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/klrahul-img4.png"
            className="kl-rahul-video-image"
            alt="alt3"
          />
          <p className="paragragh-03">Incredible Innings by KL Rahul</p>
        </div>
        <div className="each-video-container d-flex flex-column">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/klrahul-img5.png"
            className="kl-rahul-video-image"
            alt="alt4"
          />
          <p className="paragragh-03">Single-handed win by KL Rahul</p>
        </div>
      </div>
    </div>
    <div className="d-flex flex-row justify-content-center">
      <button className="btn btn-primary button">View more</button>
    </div>
  </div>
);

export default CricketerPage;
