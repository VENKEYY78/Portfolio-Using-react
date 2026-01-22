import { useState } from "react";
import BackButton from "../../backButton";

import "./index.css";

const PodcastPage = () => {
  const [activePage, setActivePage] = useState("podcastHomePage");

  return (
    <>
      {activePage === "podcastHomePage" && (
        <div className="podcast-home-page-main-bg-container">
          <div className="podcast-top-image-section">
            <h1 className="podcast-top-image-heading">Podcasts</h1>
          </div>
          <div className="podcast-bottom-section-container">
            <div className="podcast-person-container d-flex flex-row">
              <div
                className="podcast-01"
                onClick={() => setActivePage("poadcastPuriPage")}
              >
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                  className="podcast-image"
                  alt="podcastImage"
                />
                <h1 className="person-name">Puri jagannadh</h1>
                <p className="no-of-episodes">24 Episodes</p>
              </div>
              <div
                className="podcast-01"
                onClick={() => setActivePage("podcastTedxPage")}
              >
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                  className="podcast-image"
                  alt="podcastImage"
                />
                <h1 className="person-name">Tedx talks</h1>
                <p className="no-of-episodes">12 Episodes</p>
              </div>
            </div>
            <div className="podcast-person-container d-flex flex-row">
              <div
                className="podcast-01"
                onClick={() => setActivePage("podcastSadhguruPage")}
              >
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                  className="podcast-image"
                  alt="podcastImage"
                />
                <h1 className="person-name">Sadhguru</h1>
                <p className="no-of-episodes">49 Episodes</p>
              </div>
              <div
                className="podcast-01"
                onClick={() => setActivePage("podcastOnpurposePage")}
              >
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/on-purpose-img.png"
                  className="podcast-image"
                  alt="podcastImage"
                />
                <h1 className="person-name">On purpose</h1>
                <p className="no-of-episodes">49 Episodes</p>
              </div>
            </div>
          </div>
          <div className="back-navigate-button-container">
            <BackButton />
          </div>
        </div>
      )}

      <div>
        {activePage === "poadcastPuriPage" && (
          <div className="podcast-person-main-bg-container">
            <div className="podcast-person-top-container d-flex flex-row">
              <div>
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                  className="person-image"
                  alt="podcastImage"
                />
              </div>
              <div className="d-flex flex-column">
                <p className="podcast">Podcast</p>
                <h1 className="name-heading">Puri Jagannadh Podcast</h1>
                <p className="para">The Puri Jagannadh Podcast</p>
              </div>
            </div>

            <div className="podcast-person-bottom-container">
              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    Molecular Gastronomy
                  </h1>
                  <p className="para text bottom-para">
                    Anything happens there it will not cook...
                  </p>
                  <p className="para bottom-para">15 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    Mysterious book
                  </h1>
                  <p className="para text bottom-para">
                    The Voynich manuscript is the 15th century book....
                  </p>
                  <p className="para bottom-para">12 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">paella</h1>
                  <p className="para text bottom-para">
                    The national dish of spain. it was first star.....
                  </p>
                  <p className="para bottom-para">6 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    Predator Drone
                  </h1>
                  <p className="para text bottom-para">
                    The most power full drone it is 10 feet height....
                  </p>
                  <p className="para bottom-para">10 min</p>
                </div>
              </div>
            </div>

            <div className="button-container d-flex flex-row justify-content-end">
              <button
                className="button"
                onClick={() => setActivePage("podcastHomePage")}
              >
                back
              </button>
            </div>
          </div>
        )}

        {/* <!--TEDx podcast page-->  */}
        {activePage === "podcastTedxPage" && (
          <div className="podcast-person-main-bg-container">
            <div className="podcast-person-top-container d-flex flex-row">
              <div>
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                  className="person-image"
                  alt="podcastImage"
                />
              </div>
              <div className="d-flex flex-column">
                <p className="podcast">Podcast</p>
                <h1 className="name-heading">The Tedx Podcast</h1>
                <p className="para">The Tedx Podcast</p>
              </div>
            </div>

            <div className="podcast-person-bottom-container">
              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    The science of friction
                  </h1>
                  <p className="para text bottom-para">
                    Tribology. it's a funny sounding word you might...
                  </p>
                  <p className="para bottom-para">12 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">Unleash you</h1>
                  <p className="para text bottom-para">
                    What can we learn from the world's most enduringly...
                  </p>
                  <p className="para bottom-para">8 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    3 psychological tricks
                  </h1>
                  <p className="para text bottom-para">
                    We all want to save more money - but overall..
                  </p>
                  <p className="para bottom-para">10 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    The case for stubborn
                  </h1>
                  <p className="para text bottom-para">
                    this decade is a moment of choice unlike any we....
                  </p>
                  <p className="para bottom-para">12 min</p>
                </div>
              </div>
            </div>

            <div className="button-container d-flex flex-row justify-content-end">
              <button
                className="button"
                onClick={() => setActivePage("podcastHomePage")}
              >
                back
              </button>
            </div>
          </div>
        )}

        {activePage === "podcastSadhguruPage" && (
          <div className="podcast-person-main-bg-container">
            <div className="podcast-person-top-container d-flex flex-row">
              <div>
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                  className="person-image"
                  alt="podcastImage"
                />
              </div>
              <div className="d-flex flex-column">
                <p className="podcast">Podcast</p>
                <h1 className="name-heading">The Sadhguru Podcast</h1>
                <p className="para">The Sadhguru Podcast</p>
              </div>
            </div>

            <div className="podcast-person-bottom-container">
              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">Heat or heart</h1>
                  <p className="para text bottom-para">
                    Sadhguru share his wisdom on how to make...
                  </p>
                  <p className="para bottom-para">16 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    How to equip yourself
                  </h1>
                  <p className="para text bottom-para">
                    Society and human interactions are going....
                  </p>
                  <p className="para bottom-para">13 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    How not to get irritated
                  </h1>
                  <p className="para text bottom-para">
                    How do you see an unplesant spouse the....
                  </p>
                  <p className="para bottom-para">15 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">Isha Kriya</h1>
                  <p className="para text bottom-para">
                    Rooted in the timeless wisdom if the yogic....
                  </p>
                  <p className="para bottom-para">16 min</p>
                </div>
              </div>
            </div>

            <div className="button-container d-flex flex-row justify-content-end">
              <button
                className="button"
                onClick={() => setActivePage("podcastHomePage")}
              >
                back
              </button>
            </div>
          </div>
        )}

        {activePage === "podcastOnpurposePage" && (
          <div className="podcast-person-main-bg-container">
            <div className="podcast-person-top-container d-flex flex-row">
              <div>
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                  className="person-image"
                  alt="podcastImage"
                />
              </div>
              <div className="d-flex flex-column">
                <p className="podcast">Podcast</p>
                <h1 className="name-heading">On Purpose with Jay</h1>
                <p className="para">The Jay Shetty podcast</p>
              </div>
            </div>

            <div className="podcast-person-bottom-container">
              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    Patrick Bet David
                  </h1>
                  <p className="para text bottom-para">
                    Are you an entrepreneur or have dreams of mental....
                  </p>
                  <p className="para bottom-para">10 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    5 Technicques to cope
                  </h1>
                  <p className="para text bottom-para">
                    Does anxiety looms around every corner of your..
                  </p>
                  <p className="para bottom-para">4 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    Radhanath Swami ON
                  </h1>
                  <p className="para text bottom-para">
                    World renowned spritual leader and philanthropist....
                  </p>
                  <p className="para bottom-para">12 min</p>
                </div>
              </div>

              <div className="d-flex flex-row details-card">
                <div>
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    className="person-image"
                    alt="podcastImage"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h1 className="name-heading bottom-heading">
                    3 Ways to let go
                  </h1>
                  <p className="para text bottom-para">
                    Do the opinions of others veer you from the core....
                  </p>
                  <p className="para bottom-para">13 min</p>
                </div>
              </div>
            </div>
            <div className="button-container d-flex flex-row justify-content-end">
              <button
                className="button"
                onClick={() => setActivePage("podcastHomePage")}
              >
                back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default PodcastPage;
