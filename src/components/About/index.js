import { Link, Outlet } from "react-router-dom";

import "./index.css";

const About = () => (
  <div className="about-main-bg-container">
    <div className="about-career-objective-container">
      <div className="about-left-side-container">
        <h1>Career Objective</h1>
        <p>
          Aspiring full-stack developer with a strong foundation in front-end
          and back-end technologies, seeking an opportunity to leverage my
          skills in creating scalable and efficient software solutions. Eager to
          learn through real-time projects and enhance my expertise by
          contributing to impactful software development as part of an
          internship or a professional role.
        </p>
      </div>
      <div className="about-basic-details-container">
        <h1>Personal Dteails</h1>
        <ul>
          <li>Name = Venkatesh Joka</li>
          <li>Date of Birth = 30/06/2002</li>
          <li>Age = 23</li>
          <li>Gender = Male</li>
          <li>Marital Status = UnMarried</li>
          <li>Nationlity = Indian</li>
          <li>State = Andhra pradesh </li>
          <li>
            Adress = Zulakallu(vlg), Piduguralla(mdl), Andhra Pradesh, 522413
          </li>
          <li>Languages known = TELUGU, ENGLISH </li>
        </ul>
      </div>
    </div>
    <div className="about-right-side-container">
      <h1>Education Details</h1>
      <ul className="education-details-container">
        <li>
          <Link to="ssc">SSC</Link>
        </li>
        <li>
          <Link to="diplamo">DIPLAMO</Link>
        </li>
        <li>
          <Link to="btech">Btech</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </div>
);

export default About;
