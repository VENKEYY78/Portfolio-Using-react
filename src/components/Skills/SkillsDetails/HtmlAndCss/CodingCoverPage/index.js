import BackButton from "../../backButton.";

import "./index.css";

const codingCoverPage = () => (
  <div className="card-main-bg-container d-flex flex-column justify-content-center">
    <div className="card-container">
      <h1 className="heading">Code is more than some bytes in a file</h1>
    </div>

    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default codingCoverPage;
