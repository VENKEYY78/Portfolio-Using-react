import { useState } from "react";
import BackButton from "../../backButton";

import "./index.css";

const YogaPages = {
  Home: "yogaHomePage",
  Yoga_Types: "typesOfYogaPages",
};

const YogaPage = () => {
  const [activeYogaPage, setActiveYogaPage] = useState(YogaPages.Home);

  return (
    <>
      {activeYogaPage === YogaPages.Home && (
        <div className="yoga-bg-img-card pt-3">
          <div>
            <h1 className="yoga-heading-card">
              Discover the yogl life on the yoga Experience Platform
            </h1>
          </div>
          <div className="d-flex flex-row justify-content-center pt-5">
            <img
              src="https://assets.ccbp.in/frontend/static-website/yoga-girl-without-headphones-img.png"
              className="yoga-girl-without-headphones-img"
              alt="yogaImage"
            />
          </div>
          <div className="yoga-bottom-section pt-5">
            <p className="yoga-paragraoh-card">
              Yoga poses strengthen and open tight areas of the body.
            </p>
            <button
              className="button btn btn-primary"
              onClick={() => setActiveYogaPage(YogaPages.Yoga_Types)}
            >
              Get Startead
            </button>
          </div>
          <div className="back-navigate-button-container">
            <BackButton />
          </div>
        </div>
      )}

      {activeYogaPage === YogaPages.Yoga_Types && (
        <ul className="yoga-next-page-section">
          <li className="yoga-types-list-item">
            <div className="d-flex flex-column justify-content-center pt-5">
              <img
                src="https://assets.ccbp.in/frontend/static-website/yoga-girl-without-headphones-img.png"
                className="yoga-girl-without-headphones-img"
                alt="yogaImage"
              />
              <div>
                <h1 className="types-of-yoga-heading pt-3">Types of Yogas</h1>
              </div>
            </div>
            <div className="types-bottom-section">
              <div className="d-flex flex-row pt-5">
                <img
                  src="https://assets.ccbp.in/frontend/static-website/yoga-card1-img.png"
                  className="yoga-logo-img"
                  alt="yogaImage"
                />
                <div className="yoga">
                  <h1 className="yoga-heading-card2">Acro yoga</h1>
                  <p className="yoga-paragraph-card2">
                    it stretces and relaxes your body,improves stamina ana
                    memory.
                  </p>
                </div>
              </div>
            </div>
            <div className="back-button">
              <button
                className="button3"
                onClick={() => setActiveYogaPage(YogaPages.Home)}
              >
                Back
              </button>
            </div>
          </li>
          <li className="yoga-types-list-item">
            <div className="types-bottom-section">
              <div className="d-flex flex-row pt-5">
                <img
                  src="https://assets.ccbp.in/frontend/static-website/yoga-card2-img.png"
                  className="yoga-logo-img"
                  alt="yogaImage"
                />
                <div className="yoga">
                  <h1 className="yoga-heading-card2">Vinyasa yoga</h1>
                  <p className="yoga-paragraph-card2">
                    it stretces and relaxes your body,improves stamina ana
                    memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="types-bottom-section">
              <div className="d-flex flex-row pt-5">
                <img
                  src="https://assets.ccbp.in/frontend/static-website/yoga-card3-img.png"
                  className="yoga-logo-img"
                  alt="yogaImage"
                />
                <div className="yoga">
                  <h1 className="yoga-heading-card2">Hatha yoga</h1>
                  <p className="yoga-paragraph-card2">
                    it stretces and relaxes your body,improves stamina ana
                    memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="types-bottom-section">
              <div className="d-flex flex-row pt-5">
                <img
                  src="https://assets.ccbp.in/frontend/static-website/yoga-card4-img.png"
                  className="yoga-logo-img"
                  alt="yogaImage"
                />
                <div className="yoga">
                  <h1 className="yoga-heading-card2">Kundalini yoga</h1>
                  <p className="yoga-paragraph-card2">
                    it stretces and relaxes your body,improves stamina ana
                    memory.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

export default YogaPage;
