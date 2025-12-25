// import BackButton from "../../backButton.";

import "./index.css";

const Covid19Page = () => (
  <div class="covid-19-page-main-bg-container">
    <div class="top-section-container-01 d-flex flex-row justify-content-center">
      <div class="top-section-left-container">
        <h1 class="top-section-left-heading">
          All you need to know about COVID-19
        </h1>
        <button class="btn btn-primary">Know more</button>
      </div>
      <div class="top-section-right-container">
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/medicalcare-img.png"
          class="top"
        />
      </div>
    </div>

    <div class="top-section-container-02 d-flex flex-row justify-content-between">
      <div>
        <img
          src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/coronavirus-img.png"
          class="corona-virus-image"
        />
      </div>
      <div class="top-section-container-02-right">
        <h1 class="covid-19-test-heading">COVID-19 Test</h1>
        <p class="paragragh-01">
          if you think you have been exposed to novel coronavirus
          (COVID-19).....more
        </p>
      </div>
    </div>

    <h1 class="Symptoms-heading">Symptoms</h1>

    <div class="corona-Symptoms-container d-flex flex-row justify-content-start">
      <div class="Symptom-container d-flex flex-column justify-content-center">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/cough-img.png"
          class="Symptom-image"
        />
        <h1 class="Symptom-name">Dry Cough</h1>
      </div>
      <div class="Symptom-container d-flex flex-column justify-content-center high-fever">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/fever-img.png"
          class="Symptom-image"
        />
        <h1 class="Symptom-name">High fever</h1>
      </div>
      <div class="Symptom-container d-flex flex-column justify-content-center headache">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/headache-img.png"
          class="Symptom-image"
        />
        <h1 class="Symptom-name">Headache</h1>
      </div>
    </div>

    <h1 class="Symptoms-heading">Videos</h1>

    <div class="Symptoms-videos-container d-flex flex-row justify-content-between">
      <div class="doctor-image-container">
        <img
          src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/doctor-img.png"
          class="doctor-img"
        />
      </div>
      <div class="container">
        <h1 class="prevent-heading">To prevent the spread of ....</h1>
        <p class="paragragh-02">
          if you think you have been exposed to novel corona virus(COVID-19){" "}
        </p>
        <button class="btn btn-primary">Watch Video</button>
      </div>
    </div>
  </div>
);

export default Covid19Page;
