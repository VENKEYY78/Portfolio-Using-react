import "./index.css";

const DIPLAMO = () => (
  <>
    <div className="diplamo-main-bg-container">
      <h1 className="diplamo-heading">Diplamo Polytechnic</h1>
      <p className="diploma-description">
        After SSC, I completed a Diploma in Mechanical Engineering at Diviseema
        Polytechnic College, Avanigadda, Krishna District, from 2017 to 2020. I
        passed in 2020 with a percentage of 76.06%.
      </p>
      <p className="passed-out">
        <strong>Diploma in Mechanical Engineering (2017–2020) – 76.06%</strong>
      </p>

      <div className="circle-contianer">
        <div className="percentage-circle">
          <svg className="diplamo-svg" width="150" height="150">
            <circle className="normal" cx="75" cy="75" r="65"></circle>
            <circle className="show-percentage" cx="75" cy="75" r="65"></circle>
          </svg>
          <div className="percentage-text">
            <h2>76.06%</h2>
            <p>Percentage</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default DIPLAMO;
