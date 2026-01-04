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

      <strong> I completed my SSC in 2017 with a GPA of 7.8</strong>

      <div class="gpa-circle">
        <svg width="160" height="160">
          <circle class="bg" cx="80" cy="80" r="70"></circle>
          <circle class="progress" cx="80" cy="80" r="70"></circle>
        </svg>
        <div class="gpa-text">
          <h2>7.8</h2>
          <p>GPA</p>
        </div>
      </div>
    </div>
  </>
);

export default SSC;
