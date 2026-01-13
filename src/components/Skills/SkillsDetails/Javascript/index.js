import { Link } from "react-router-dom";

import projectsData from "../../projectsData";
import "./index.css";

const JavaScriptProjects = projectsData.filter(
  (project) => project.category === "javascript"
);

const Javascript = () => (
  <div className="javascript-projects-main-bg-container">
    <div className="project-card-container">
      {JavaScriptProjects.map((project) => (
        <ul className="project-card" key={project.id}>
          <h1 className="card-title">{project.title}</h1>
          <p className="card-description">{project.description}</p>
          <Link to={`/skills/javascript/${project.id}/details`}>
            <button className="view-button" type="button">
              View
            </button>
          </Link>
        </ul>
      ))}
    </div>
  </div>
);

export default Javascript;
