import BackButton from "../../backButton";

import "./index.css";

const FoundationsPage = () => (
  <div className="foundations-bg-img d-flex flex-column justify-content-end">
    <div className="Foundations-bottom-bg-container">
      <div>
        <h1 className="foundations-heading-card">Foundations</h1>
        <p className="foundations-paragraph-card">
          Learn courses that will help you move forward in your career
        </p>
      </div>
      <ul className="foundations">
        <div className="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-python-img.png"
            className="foundations-python-img"
            alt="foundationsIamge"
          />
          <h1 className="python-heading-card">Python</h1>
        </div>

        <div className="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-javascript-img.png"
            className="foundations-python-img"
            alt="foundationsIamge"
          />
          <h1 className="python-heading-card">Javascript</h1>
        </div>

        <div className="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-html5-img.png"
            className="foundations-python-img"
            alt="foundationsIamge"
          />
          <h1 className="python-heading-card">HTML5</h1>
        </div>

        <div className="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-java-img.png"
            className="foundations-python-img"
            alt="foundationsIamge"
          />
          <h1 className="python-heading-card">Jva</h1>
        </div>
      </ul>
      <div className="back-navigate-button-container">
        <BackButton />
      </div>
    </div>
  </div>
);

export default FoundationsPage;
