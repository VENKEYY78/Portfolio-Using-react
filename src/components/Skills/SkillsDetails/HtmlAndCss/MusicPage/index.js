import BackButton from "../../backButton";

import { useState } from "react";

import "./index.css";

const MusicPage = () => {
  const [musicActivePage, setMusicActivePage] = useState("musicHomePage");

  return (
    <>
      {musicActivePage === "musicHomePage" && (
        <div className="music-page-main-bg-container d-flex flex-column justify-content-between">
          <div className="home-page-text-container">
            <h1 className="home-page-heading">Sleep Music</h1>
            <p className="home-page-para-content">
              soothing bedtime music to help you fall into a deep and natural
              sleep
            </p>
          </div>

          <div className="cerd text-center">
            <div className="night-island-container">
              <h1>Night Island</h1>
            </div>

            <div className="get-start-container">
              <p className="para">
                Non-stop 8-hour mixes of our most popular sleep audio
              </p>
              <button
                className="button"
                onClick={() => setMusicActivePage("musicGetStartPage")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="back-navigate-button-container">
            <BackButton />
          </div>
        </div>
      )}

      {musicActivePage === "musicGetStartPage" && (
        <div className="music-details-page-container">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/clouds-img.png"
            className="music-detail-page-image"
            alt="musicImage"
          />
          <div className="text-container">
            <h1 className="heading-01">Night Island</h1>
            <p className="para-01">
              Ease the mind into a restful night's sleep with these deep,
              amblent tones.
            </p>
            <p className="para-02">45 MIN SLEEP MUSIC</p>
            <h1 className="heading-02">Related</h1>
            <div className="sleep-music-container d-flex">
              <div className="Moon-Clouds">
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/moon-clouds-img.png"
                  className="moon-clouds-image"
                  alt="musicImage"
                />
                <h1 className="heading-02">Moom Clouds</h1>
                <p className="para-02">55 MIN SLEEP MUSIC</p>
              </div>

              <div className="Moon-Clouds">
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sweet-sleep-img.png"
                  className="moon-clouds-image"
                  alt="musicImage"
                />
                <h1 className="heading-02">Sweet Sleep</h1>
                <p className="para-02">60 MIN SLEEP MUSIC</p>
              </div>
            </div>
            <div>
              <button
                className="button"
                onClick={() => setMusicActivePage("musicHomePage")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPage;
