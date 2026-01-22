import BackButton from "../../backButton";

import { useState } from "react";

import "./index.css";

const ConferencePage = () => {
  const [activePage, setActivePage] = useState("sectionPage1");

  return (
    <>
      <div>
        {activePage === "sectionPage1" && (
          <div class="conference-page-main-bg-container">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/conference-img.png"
              class="conference-img"
              alt="conference-image"
            />
            <div class="conference-page-bottom-container d-flex flex-column justify-content-center">
              <h1 class="conference-heading">The Things Conference</h1>
              <p class="paragragh-01">
                Redefining the future of IoT with LoRaWAN
              </p>
              <div>
                <button
                  class="btn btn-primary button"
                  onClick={() => setActivePage("sectionPage2")}
                >
                  Know more
                </button>
              </div>
            </div>
            <div className="back-navigate-button-container">
              <BackButton />
            </div>
          </div>
        )}

        {activePage === "sectionPage2" && (
          <div class="Conference-details-page">
            <div class="embed-responsive embed-responsive-16by9 conference-video">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/W_2hCKnzWj0?rel=0"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <div class="conference-details d-flex flex-column justify-content-center">
              <h1>The Things Conference</h1>
              <p>Join Asia's Largest Conference on LoRaWAN</p>
              <div class="d-flex flex-row justify-content-between ">
                <div class="div">
                  <h1>1400+</h1>
                  <p>Attendes</p>
                </div>
                <div class="div">
                  <h1>100+</h1>
                  <p>Workshops</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-between div">
                <div class="div">
                  <h1>120+</h1>
                  <p>Speakers</p>
                </div>
                <div class="div">
                  <h1>10+</h1>
                  <p>Countries</p>
                </div>
              </div>
              <button
                class="btn btn-primary"
                onClick={() => setActivePage("sectionPage1")}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConferencePage;
