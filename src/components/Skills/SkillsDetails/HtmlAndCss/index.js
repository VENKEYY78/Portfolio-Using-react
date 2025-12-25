import { Link } from "react-router-dom";

// import projectsData from './projectsDta'

import "./index.css";
import projectsData from "../../projectsData";

const HtmlAndCss = () => (
  <div className="html-and-css-projects-main-bg-container">
    <div className="project-card-container">
      {projectsData.map((project) => (
        <ul className="project-card" key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Link to={`/skills/htmlandcss/${project.id}`}>
            <button className="view-button" type="button">
              View
            </button>
          </Link>
        </ul>
      ))}
    </div>
  </div>
);

export default HtmlAndCss;
