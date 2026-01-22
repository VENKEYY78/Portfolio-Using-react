import BackButton from "../../backButton";

import "./index.css";

const Covid19Page = () => (
  <div className="covid-19-page-main-bg-container">
    <div className="top-section-container-01 d-flex flex-row justify-content-center">
      <div className="covid-19-page-top-section-left-container">
        <h1 className="covid-19-page-top-section-left-heading">
          All you need to know about COVID-19
        </h1>
        <button className="btn btn-primary">Know more</button>
      </div>
      <div className="top-section-right-container">
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/medicalcare-img.png"
          className="top"
          alt="covid-19-page-image-01"
        />
      </div>
    </div>

    <div className="covid-19-page-top-section-container-02 d-flex flex-row justify-content-between">
      <div>
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/coronavirus-img.png"
          className="covid-19-page-corona-virus-image"
          alt="covid-19-page-image-02"
        />
      </div>
      <div className="covid-19-page-top-section-container-02-right">
        <h1 className="covid-19-page-covid-19-test-heading">COVID-19 Test</h1>
        <p className="covid-19-page-paragragh-01">
          if you think you have been exposed to novel coronavirus
          (COVID-19).....more
        </p>
      </div>
    </div>

    <h1 className="covid-19-page-Symptoms-heading">Symptoms</h1>

    <div className="covid-19-page-corona-Symptoms-container d-flex flex-row justify-content-start">
      <div className="covid-19-page-Symptom-container d-flex flex-column justify-content-center">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/cough-img.png"
          className="covid-19-page-Symptom-image"
          alt="covid-19-page-image-03"
        />
        <h1 className="covid-19-page-Symptom-name">Dry Cough</h1>
      </div>
      <div className="covid-19-page-Symptom-container covid-19-page-high-fever  d-flex flex-column justify-content-center">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/fever-img.png"
          className="covid-19-page-Symptom-image"
          alt="covid-19-page-image-04"
        />
        <h1 className="covid-19-page-Symptom-name">High fever</h1>
      </div>
      <div className="covid-19-page-Symptom-container d-flex flex-column justify-content-center covid-19-page-headache">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/headache-img.png"
          className="covid-19-page-Symptom-image"
          alt="covid-19-page-image-05"
        />
        <h1 className="covid-19-page-Symptom-name">Headache</h1>
      </div>
    </div>

    <h1 className="covid-19-page-Symptoms-heading">Videos</h1>

    <div className="covid-19-page-Symptoms-videos-container d-flex flex-row justify-content-between">
      <div className="covid-19-page-doctor-image-container">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/doctor-img.png"
          className="covid-19-page-doctor-img"
          alt="covid-19-page-image-06"
        />
      </div>
      <div className="covid-19-page-container">
        <h1 className="covid-19-page-prevent-heading">
          To prevent the spread of ....
        </h1>
        <p className="covid-19-page-paragragh-02">
          if you think you have been exposed to novel corona virus(COVID-19){" "}
        </p>
        <button className="btn btn-primary">Watch Video</button>
      </div>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default Covid19Page;
