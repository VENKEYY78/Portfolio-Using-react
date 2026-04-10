import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BackButton from "../../backButton";
import "./index.css";

const ArticlesPages = {
  Home: "ArticalHomePage",
  TechnologyPage: "TechnologyArticalPage",
  SciencePage: "ScienceArticalPage",
  HealthCarePage: "HealthCareArticalPage",
  BusinessPage: "BusinessArticalPage",
};

const ArticlesPage = () => {
  const [activeArticalPage, setActiveArticalPage] = useState(
    ArticlesPages.Home,
  );

  return (
    <>
      {activeArticalPage === ArticlesPages.Home && (
        <div className="empower-bg-container-section">
          <div className="empower-main-heading-section">
            <h1 className="empower-heading">Empower yourself</h1>
            <p className="empower-paragraph">
              By learning new coursses from worlds leading experts
            </p>
          </div>
          <div className="Artical-cards-containers">
            <div className="d-flex flex-row justify-content-start">
              <div
                className="empower-articles-section-card"
                onClick={() =>
                  setActiveArticalPage(ArticlesPages.TechnologyPage)
                }
              >
                <img
                  src="https://assets.ccbp.in/frontend/static-website/articles-technology-icon-img.png"
                  className="articles-technology-icon-img"
                  alt="articalImage"
                />
                <p className="Categories-Icons-paragraph">Technology</p>
              </div>

              <div
                className="empower-articles-section-card"
                onClick={() => setActiveArticalPage(ArticlesPages.SciencePage)}
              >
                <img
                  src="https://assets.ccbp.in/frontend/static-website/articles-science-icon-img.png"
                  className="articles-technology-icon-img"
                  alt="articalImage"
                />
                <p className="Categories-Icons-paragraph">Science</p>
              </div>
            </div>

            <div className="d-flex flex-row d-flex justify-content-start">
              <div
                className="empower-articles-section-card "
                onClick={() =>
                  setActiveArticalPage(ArticlesPages.HealthCarePage)
                }
              >
                <img
                  src="https://assets.ccbp.in/frontend/static-website/articles-healthcare-icon-img.png"
                  className="articles-technology-icon-img"
                  alt="articalImage"
                />
                <p className="Categories-Icons-paragraph ">Health Care</p>
              </div>

              <div
                className="empower-articles-section-card"
                onClick={() => setActiveArticalPage(ArticlesPages.BusinessPage)}
              >
                <img
                  src="https://assets.ccbp.in/frontend/static-website/articles-business-icon-img.png"
                  className="articles-technology-icon-img"
                  alt="articalImage"
                />
                <p className="Categories-Icons-paragraph ">Business</p>
              </div>
            </div>
          </div>
          <div className="back-navigate-button-container">
            <BackButton />
          </div>
        </div>
      )}
      {activeArticalPage === ArticlesPages.TechnologyPage && (
        <div className="BootStrap-carosel-container">
          <Carousel className="Carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-technology-c1-img.png"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-technology-c2-img.png"
                alt="Slide 2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-technology-c3-img.png"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
          <div class="List-of-topics-container">
            <h1 class="List-of-topics-heading">List of Topics</h1>

            <ul class="list-of-topics-container">
              <li className="list-of-topics-list-item">
                Artifical intelligence
              </li>
              <li className="list-of-topics-list-item"> Data Science</li>
              <li className="list-of-topics-list-item">Machine Learning</li>
              <li className="list-of-topics-list-item">internet of Things</li>
              <li className="list-of-topics-list-item">Blockchain</li>
              <li className="list-of-topics-list-item">Virtual Reality</li>
              <li className="list-of-topics-list-item">
                Robotic Process Automation (RPA)
              </li>
            </ul>
            <div class="text-center pt-3">
              <button
                class="list-of-topics-button"
                onClick={() => setActiveArticalPage(ArticlesPages.Home)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {activeArticalPage === ArticlesPages.HealthCarePage && (
        <div className="BootStrap-carosel-container">
          <Carousel className="Carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-healthcare-c1-img.png"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-healthcare-c2-img.png"
                alt="Slide 2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-healthcare-c3-img.png"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
          <div class="List-of-topics-container">
            <h1 class="List-of-topics-heading">List of Topics</h1>

            <ul class="list-of-topics-container">
              <li className="list-of-topics-list-item">
                Infrastructure Management
              </li>
              <li className="list-of-topics-list-item">Lastet i Health Care</li>
              <li className="list-of-topics-list-item">Pharamaceuticals</li>
              <li className="list-of-topics-list-item">COVID-19</li>
            </ul>
            <div class="text-center pt-3">
              <button
                class="list-of-topics-button"
                onClick={() => setActiveArticalPage(ArticlesPages.Home)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {activeArticalPage === ArticlesPages.SciencePage && (
        <div className="BootStrap-carosel-container">
          <Carousel className="Carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-science-c1-img.png"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-science-c2-img.png"
                alt="Slide 2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-science-c3-img.png"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
          <div class="List-of-topics-container">
            <h1 class="List-of-topics-heading">List of Topics</h1>

            <ul class="list-of-topics-container">
              <li className="list-of-topics-list-item">Biology</li>
              <li className="list-of-topics-list-item"> Zoology</li>
              <li className="list-of-topics-list-item">Cardiology</li>
              <li className="list-of-topics-list-item">Chemistry</li>
              <li className="list-of-topics-list-item">Bio Chemistry</li>
              <li className="list-of-topics-list-item">Nano Sciece</li>
              <li className="list-of-topics-list-item">Astronomy</li>
            </ul>
            <div class="text-center pt-3">
              <button
                class="list-of-topics-button"
                onClick={() => setActiveArticalPage(ArticlesPages.Home)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {activeArticalPage === ArticlesPages.BusinessPage && (
        <div className="BootStrap-carosel-container">
          <Carousel className="Carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-business-c1-img.png"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-business-c2-img.png"
                alt="Slide 2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Artical-technology-carousel-img"
                src="https://assets.ccbp.in/frontend/static-website/articles-business-c3-img.png"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
          <div class="List-of-topics-container">
            <h1 class="List-of-topics-heading">List of Topics</h1>

            <ul class="list-of-topics-container">
              <li className="list-of-topics-list-item">Business Models</li>
              <li className="list-of-topics-list-item">
                21st Century Business Skills
              </li>
              <li className="list-of-topics-list-item">
                Traditional Business Approaches
              </li>
              <li className="list-of-topics-list-item">
                How to go from 0 to 1? The StartUp 101
              </li>
            </ul>
            <div class="text-center pt-3">
              <button
                class="list-of-topics-button"
                onClick={() => setActiveArticalPage(ArticlesPages.Home)}
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

export default ArticlesPage;
