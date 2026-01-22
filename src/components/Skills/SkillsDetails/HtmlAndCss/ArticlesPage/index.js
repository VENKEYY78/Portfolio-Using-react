import { useState } from "react";

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
        </div>
      )}
      {activeArticalPage === ArticlesPages.TechnologyPage && (
        <h1 onClick={() => setActiveArticalPage(ArticlesPages.Home)}>
          Technologies
        </h1>
      )}
      {activeArticalPage === ArticlesPages.HealthCarePage && (
        <h1 onClick={() => setActiveArticalPage(ArticlesPages.Home)}>
          HealthCarePage
        </h1>
      )}
      {activeArticalPage === ArticlesPages.SciencePage && (
        <h1 onClick={() => setActiveArticalPage(ArticlesPages.Home)}>
          SciencePage
        </h1>
      )}
      {activeArticalPage === ArticlesPages.BusinessPage && (
        <h1 onClick={() => setActiveArticalPage(ArticlesPages.Home)}>
          BusinessPage
        </h1>
      )}
    </>
  );
};

export default ArticlesPage;

/*
 <div id="section1">
        <div class="empower-bg-container-section-01">
            <div id="Technology-carousel-indicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#Technology-carousel-indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#Technology-carousel-indicators" data-slide-to="1"></li>
                    <li data-target="#Technology-carousel-indicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c1-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c2-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c3-img.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" type="button" data-target="#Technology-carousel-indicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" type="button" data-target="#Technology-carousel-indicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h1 class="carousel-imge-bg-card">List of Topics</h1>
            </div>

            <div class="Carousel-Images-paragraph pt-3">
                <ul class="list-of-topics">
                    <li>Artifical intelligence</li>
                    <li> Data Science</li>
                    <li>Machine Learning</li>
                    <li>internet of Things</li>
                    <li>Blockchain</li>
                    <li>Virtual Reality</li>
                    <li>Robotic Process Automation (RPA)</li>
                </ul>
                <div class="text-center pt-3">
                    <button class="button" onclick="display('sectionHome')">Back</button>
                </div>
            </div>
        </div>
    </div>

    <div id="section2">
        <div class="empower-bg-container-section-01">
            <div id="science-carousel-indicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#science-carousel-indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#science-carousel-indicators" data-slide-to="1"></li>
                    <li data-target="#science-carousel-indicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c1-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c2-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c3-img.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" type="button" data-target="#science-carousel-indicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" type="button" data-target="#science-carousel-indicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h1 class="carousel-imge-bg-card">List of Topics</h1>
            </div>

            <div class="Carousel-Images-paragraph pt-3">
                <ul class="list-of-topics">
                    <li>Artifical intelligence</li>
                    <li> Data Science</li>
                    <li>Machine Learning</li>
                    <li>internet of Things</li>
                    <li>Blockchain</li>
                    <li>Virtual Reality</li>
                    <li>Robotic Process Automation (RPA)</li>
                </ul>
                <div class="text-center pt-3">
                    <button class="button" onclick="display('sectionHome')">Back</button>
                </div>
            </div>
        </div>
    </div>

    <div id="section3">
        <div class="empower-bg-container-section-01">
            <div id="health-carousel-indicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#health-carousel-indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#health-carousel-indicators" data-slide-to="1"></li>
                    <li data-target="#health-carousel-indicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c1-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c2-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c3-img.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" type="button" data-target="#health-carousel-indicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" type="button" data-target="#health-carousel-indicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h1 class="carousel-imge-bg-card">List of Topics</h1>
            </div>

            <div class="Carousel-Images-paragraph pt-3">
                <ul class="list-of-topics">
                    <li>Artifical intelligence</li>
                    <li> Data Science</li>
                    <li>Machine Learning</li>
                    <li>internet of Things</li>
                    <li>Blockchain</li>
                    <li>Virtual Reality</li>
                    <li>Robotic Process Automation (RPA)</li>
                </ul>
                <div class="text-center pt-3">
                    <button class="button" onclick="display('sectionHome')">Back</button>
                </div>
            </div>
        </div>
    </div>


    <div id="section4">
        <div class="empower-bg-container-section-01">
            <div id="Business-carousel-indicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#Business-carousel-indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#Business-carousel-indicators" data-slide-to="1"></li>
                    <li data-target="#Business-carousel-indicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c1-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c2-img.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.ccbp.in/frontend/static-website/articles-technology-c3-img.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" type="button" data-target="#Business-carousel-indicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" type="button" data-target="#Business-carousel-indicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h1 class="carousel-imge-bg-card">List of Topics</h1>
            </div>

            <div class="Carousel-Images-paragraph pt-3">
                <ul class="list-of-topics">
                    <li>Artifical intelligence</li>
                    <li> Data Science</li>
                    <li>Machine Learning</li>
                    <li>internet of Things</li>
                    <li>Blockchain</li>
                    <li>Virtual Reality</li>
                    <li>Robotic Process Automation (RPA)</li>
                </ul>
                <div class="text-center pt-3">
                    <button class="button" onclick="display('sectionHome')">Back</button>
                </div>
            </div>
        </div>
    </div>
    */
