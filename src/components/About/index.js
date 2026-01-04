import { NavLink, Outlet } from "react-router-dom";

import "./index.css";

const About = () => (
  <div className="about-main-bg-container">
    <div className="about-career-objective-left-container">
      <div className="about-career-objective-container">
        <h1 className="career-object-heading">Career Objective</h1>
        <p className="career-object-description">
          Aspiring full-stack developer with a strong foundation in front-end
          and back-end technologies, seeking an opportunity to leverage my
          skills in creating scalable and efficient software solutions. Eager to
          learn through real-time projects and enhance my expertise by
          contributing to impactful software development as part of an
          internship or a professional role.
        </p>
      </div>
      <div className="about-basic-details-container">
        <h1 className="personal-details-heading">Personal Dteails</h1>
        <ul className="personal-details-list-container">
          <li className="personal-details-list-item">
            <strong>Name =</strong> Venkatesh Joka
          </li>
          <li className="personal-details-list-item">
            <strong>Date of Birth = </strong>30/06/2002
          </li>
          <li className="personal-details-list-item">
            <strong>Age =</strong> 23
          </li>
          <li className="personal-details-list-item">
            <strong>Gender = </strong>Male
          </li>
          <li className="personal-details-list-item">
            <strong>Marital Status = </strong>UnMarried
          </li>
          <li className="personal-details-list-item">
            <strong>Nationlity = </strong>Indian
          </li>
          <li className="personal-details-list-item">
            <strong>State =</strong> Andhra pradesh{" "}
          </li>
          <li className="personal-details-list-item">
            <strong>Adress =</strong> Zulakallu(vlg), Piduguralla(mdl), Andhra
            Pradesh, 522413
          </li>
          <li className="personal-details-list-item">
            <strong>Languages known =</strong> TELUGU, ENGLISH{" "}
          </li>
        </ul>
      </div>
    </div>
    <div className="about-right-side-education-details-container">
      <h1 className="education-heading">Education Details</h1>
      <ul className="education-details-container">
        <li>
          <NavLink
            to="ssc"
            className={({ isActive }) =>
              isActive ? "link skills-button active" : "link skills-button"
            }
          >
            SSC
          </NavLink>
        </li>
        <li>
          <NavLink
            to="diplamo"
            className={({ isActive }) =>
              isActive ? "link skills-button active" : "link skills-button"
            }
          >
            DIPLAMO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="btech"
            className={({ isActive }) =>
              isActive ? "link skills-button active" : "link skills-button"
            }
          >
            Btech
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  </div>
);

export default About;
