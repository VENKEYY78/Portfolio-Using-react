import "./index.css";

const SSC = () => (
  <>
    <div className="ssc-main-bg-container">
      <h1 className="ssc-heading">SSC / School Education</h1>
      <p className="ssc-description">
        completed my schooling from 1st to 8th standard in Telugu medium at ZPHS
        School, Zulakallu, where I developed a strong academic foundation and
        discipline.
        <br />
        <br />
        For my 9th and 10th standards, I joined Sri Divya Sai English Medium
        School, Karempudi, a private school that offers both English and Telugu
        medium education. Since my earlier education was in Telugu medium, I
        continued in the Telugu medium at this school as well. Studying in a
        private school environment helped me improve my understanding,
        confidence, and exam preparation.
        <br />
      </p>

      <p className="passed-out">
        <strong> I completed my SSC in 2017 with a GPA of 7.8</strong>
      </p>
      <div className="circle-contianer">
        <div className="gpa-circle">
          <svg className="ssc-svg" width="130" height="130">
            <circle className="bg" cx="65" cy="65" r="55"></circle>
            <circle className="progress" cx="65" cy="65" r="55"></circle>
          </svg>
          <div className="gpa-text">
            <h2>7.8</h2>
            <p>GPA</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SSC;
