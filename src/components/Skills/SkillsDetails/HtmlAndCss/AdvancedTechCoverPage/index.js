import BackButton from "../../backButton";
import "./index.css";

const AdvancedTechCard = () => (
  <div className="advanced-technologies-cover-page-main-bg-container">
    <div className="advanced-technologies-card-container d-flex">
      <h1 className="advanced-technologies-heading">Advanced Technologies</h1>
      <p className="advanced-technologies-description">
        Machinery and equipment developed from the application of scientific
        knowledge
      </p>
      <div className="advanced-technologies-buttons-container">
        <button className="advanced-technologies-button learn">
          Learn more
        </button>
        <button className="advanced-technologies-button save">
          Save Draft
        </button>
      </div>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default AdvancedTechCard;
