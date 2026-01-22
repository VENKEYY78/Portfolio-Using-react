import { useState } from "react";

// import BackButton from "../../backButton";

import AdvancedTechCard from "../AdvancedTechCoverPage";
import NewsPage from "../NewsPage";

import "./index.css";

const MyprojectPageProjects = {
  Home: "myProjectHomePage",
  Page_01: "myProjectPageAdvancedTech",
  Page_02: "myProjectPageDivali",
  Page_03: "myProjectPageHappyMealsPage",
  Page_04: "myProjectPageNewsPaper",
};

const MyprojectsPage = () => {
  const [activeProjectPage, setActiveProjectPage] = useState(
    MyprojectPageProjects.Home
  );
  console.log(activeProjectPage);

  return (
    <>
      {activeProjectPage === MyprojectPageProjects.Home && (
        <div className="my-project-home-page-bg-container">
          <div className="my-project-home-page-top-container">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/software-developer-img.png"
              className="my-project-home-page-image"
              alt="myProjectImage"
            />
            <h1 className="my-project-home-page-top-heading">My Projects</h1>
            <p className="my-project-home-page-top-paragraph">
              There are a few of my Static Website projects that I have
              developed using HTML, CSS and Boostrap
            </p>
          </div>

          <div className="my-project-home-page-bottom-setion">
            <div className="my-project-home-page-bottom-setion-A">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/advanced-technologies-img.png"
                className="my-project-home-page-bottom-setion-image"
                alt="myProjectImage"
                onClick={() =>
                  setActiveProjectPage(MyprojectPageProjects.Page_01)
                }
              />
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/diwali-img.png"
                className="my-project-home-page-bottom-setion-image"
                alt="myProjectImage"
                onClick={() =>
                  setActiveProjectPage(MyprojectPageProjects.Page_02)
                }
              />
            </div>
            <div className="my-project-home-page-bottom-setion-A">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/food-img.png"
                className="my-project-home-page-bottom-setion-image"
                alt="myProjectImage"
                onClick={() =>
                  setActiveProjectPage(MyprojectPageProjects.Page_03)
                }
              />
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/news-paper-img.png"
                className="my-project-home-page-bottom-setion-image"
                alt="myProjectImage"
                onClick={() =>
                  setActiveProjectPage(MyprojectPageProjects.Page_04)
                }
              />
            </div>
          </div>
        </div>
      )}
      {activeProjectPage === MyprojectPageProjects.Page_01 && (
        <AdvancedTechCard />
      )}
      {activeProjectPage === MyprojectPageProjects.Page_02 && (
        <h1>{activeProjectPage}</h1>
      )}
      {activeProjectPage === MyprojectPageProjects.Page_03 && (
        <h1>{activeProjectPage}</h1>
      )}
      {activeProjectPage === MyprojectPageProjects.Page_04 && <NewsPage />}
    </>
  );
};
export default MyprojectsPage;
